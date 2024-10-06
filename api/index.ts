import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { prettyJSON } from "hono/pretty-json";
import { handle } from "hono/vercel";
import { BASE_PATH, DEFAULT_LENGTH, PARSER_ENDPOINT_ERR_MESSAGE_400, VERSION } from "./const";
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
  const ua = c.req.query().ua;
  if (!ua) {
    throw new HTTPException(400, {
      message: PARSER_ENDPOINT_ERR_MESSAGE_400,
    });
  }
  return c.json({ message: "parser", ua });
});

export default handle(app);
