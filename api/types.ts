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
  type: DeviceInfo;
  browser: Browser;
  os: OS;
  device: Device;
}

export interface Browser {
  name: BrowserName;
  version_major: number;
  version: string;
}

export type BrowserName = "Android" | "Chrome" | "Chrome Mobile" | "Firefox" | "Firefox Mobile" | "IE";

export interface Device {
  name: string;
  brand: null | string;
  model: null | string;
}

export interface OS {
  name: OSName;
  version_major: number | null | string;
  version: null | string;
}

export type OSName = "Linux" | "Mac os X" | "Ubuntu" | "Windows";

export interface DeviceInfo {
  mobile: boolean;
  tablet: boolean;
  touch_capable: boolean;
  pc: boolean;
  bot: boolean;
}

export interface Mobile {
  ua: string;
  type: DeviceInfo;
  browser: Browser;
  os: Browser;
  device: Device;
}
