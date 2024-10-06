import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { handle } from "hono/vercel";
import { BASE_PATH, DEFAULT_LENGTH, VERSION } from "./const";
import raw from "./data/uas.json";
import { generator } from "./generator";
import { Uas } from "./types";

const { data } = raw as Uas;
const allAgents = Object.values(data).flat();

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath(`${BASE_PATH}/${VERSION}`);

app.use(prettyJSON());

app.get("/gen", (c) => {
  return c.json(generator(allAgents, Number(c.req.query().length) || DEFAULT_LENGTH));
});

app.get("/parser", (c) => {
  return c.json({ message: "coucou" });
});

export default handle(app);
