export interface Uas {
  data: Data;
}

export interface Data {
  desktop: Desktop[];
  mobile: Mobile[];
  tablet: Mobile[];
}

export interface Desktop {
  ua: string;
  type: Type;
  browser: Browser;
  os: OS;
  device: Device;
}

export interface Browser {
  name: BrowserName;
  version_major: number;
  version: string;
}

export enum BrowserName {
  Android = "Android",
  Chrome = "Chrome",
  ChromeMobile = "Chrome Mobile",
  Firefox = "Firefox",
  FirefoxMobile = "Firefox Mobile",
  Ie = "IE",
}

export interface Device {
  name: string;
  brand: null | string;
  model: null | string;
}

export interface OS {
  name: PurpleName;
  version_major: number | null | string;
  version: null | string;
}

export enum PurpleName {
  Linux = "Linux",
  MACOSX = "Mac os X",
  Ubuntu = "Ubuntu",
  Windows = "Windows",
}

export interface Type {
  mobile: boolean;
  tablet: boolean;
  touch_capable: boolean;
  pc: boolean;
  bot: boolean;
}

export interface Mobile {
  ua: string;
  type: Type;
  browser: Browser;
  os: Browser;
  device: Device;
}
