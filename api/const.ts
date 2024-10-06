import { BrowserName, OSName } from "./types";

export const DEFAULT_LENGTH = 1;
export const BASE_PATH = "/api";
export const VERSION = "v1";
export const BROWSERSNAMES: BrowserName[] = ["Android", "Chrome", "Chrome Mobile", "Firefox", "Firefox Mobile", "IE"];
export const OSNAMES: OSName[] = ["Linux", "Mac os X", "Ubuntu", "Windows"];
export const PARSER_ENDPOINT_ERR_MESSAGE_400 =
  "[ERROR] : Parameter ua is required when hitting GET /parser endpoint. Please see the documentation for more information : \n https://github.com/razmi0/ua-api/tree/main?tab=readme-ov-file#endpoints";
