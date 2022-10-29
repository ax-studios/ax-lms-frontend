export const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const OTP_REGEX = /^\d{6}/;
export const themes = [
  'dark',
  'winter',
  'synthwave',
  'halloween',
  'cmyk',
  'forest',
  'night',
  'el regaldo',
  'smile',
] as const;
export type themesInterface = typeof themes[number];

export const width = {
  drawer: {
    closed: '80px',
    open: '320px',
  },
  Todo: {
    closed: '60px',
    open: '500px',
  },
};
