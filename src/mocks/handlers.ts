import { rest } from "msw";
import { UserDateRegister } from "../data/types";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
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
];
