export const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const OTP_REGEX = /^\d{6}/;
export const themes: Array<
  'dark' | 'winter' | 'synthwave' | 'halloween' | 'cmyk'
> = ['dark', 'winter', 'synthwave', 'halloween', 'cmyk'];

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
