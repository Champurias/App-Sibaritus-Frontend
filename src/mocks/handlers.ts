import { rest } from "msw";
import { UserDateRegister } from "../data/types";
import { UserCredentials } from "../redux/types/types";
import mockExperience from "./mockExperience";
import mockExperienceList from "./mockExperienceList";

const url = process.env.REACT_APP_API_URL;
const { id } = mockExperience[0];
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

  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    const { password } = await req.json<UserCredentials>();
    if (password === "wrongPassword") {
      return res(
        ctx.status(401),
        ctx.json({ error: "No te puedes registrar" })
      );
    }

    return res(ctx.status(200), ctx.json({ token: "tokenTest" }));
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
  rest.delete(`${url}/experience/delete/${id}`, async (req, res, ctx) => {
    return res.once(ctx.status(202));
  }),

  rest.delete(`${url}/experience/delete/${id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "hemos tenido un error" })
    );
  }),

  rest.post(`${url}/experience/create`, async (req, res, ctx) => {
    /*  const experience = await req.json<Experience>(); */
    return res.once(
      ctx.status(201),
      ctx.json({ text: "tu experiencia ha sido creada" })
    );
  }),
  rest.post(`${url}/experience/create`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "hemos tenido un error" })
    );
  }),
  rest.get(`${url}/experience/${id}`, async (req, res, ctx) => {
    return await res.once(ctx.status(200), ctx.json(mockExperience[0]));
  }),

  rest.get(`${url}/experience/${id}`, async (req, res, ctx) => {
    return await res.once(
      ctx.status(500),
      ctx.json({ error: " no ha sido posible encontrar la experiencia" })
    );
  }),
];
export default handlers;
