export type Uas = {
  data: Data;
};

export type Data = {
  desktop: Desktop[];
  mobile: Mobile[];
  tablet: Mobile[];
};

export type Desktop = {
  ua: string;
  type: DeviceInfo;
  browser: Browser;
  os: OS;
  device: Device;
};

export type Browser = {
  name: BrowserName;
  version_major: number;
  version: string;
};

export type BrowserName = "Android" | "Chrome" | "Chrome Mobile" | "Firefox" | "Firefox Mobile" | "IE";

export type Device = {
  name: string;
  brand: null | string;
  model: null | string;
};

export type OS = {
  name: OSName;
  version_major: number | null | string;
  version: null | string;
};

export type OSName = "Linux" | "Mac os X" | "Ubuntu" | "Windows";

export type DeviceInfo = {
  mobile: boolean;
  tablet: boolean;
  touch_capable: boolean;
  pc: boolean;
  bot: boolean;
};

export type Mobile = {
  ua: string;
  type: DeviceInfo;
  browser: Browser;
  os: Browser;
  device: Device;
};
