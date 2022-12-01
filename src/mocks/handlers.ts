import { rest } from "msw";
import { UserDateRegister } from "../data/types";
import mockExperience from "./mockExperience";
import mockExperienceList from "./mockExperienceList";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    const user = await req.json<UserDateRegister>();
    const { username } = user;

    if (username === "registerUser") {
      return res(
        ctx.status(409),
        ctx.json({ error: "invalid name, choose another name" })
      );
    }
    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.get(`${url}/experience/list`, async (req, res, ctx) => {
    return res.once(
      ctx.status(404),
      ctx.json({ error: "error no hay experiencias gastronomicas que mostrar" })
    );
  }),
  rest.get(`${url}/experience/list`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockExperienceList));
  }),
];
export default handlers;
