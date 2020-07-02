import { coSheme17117 as c } from './colors';

export const themes = {
  light: {
    dark: false,
    colors: {
      text: c.dark,
      base: c.light4,
      background: c.light,
      card: c.light2,
      primary: c.pri,
      secondary: c.sec,

      headerBackground: c.light4,
      buttonText: c.light,
      button: c.dark,
      placeholder: c.light5,
      altButton: c.light2,
    }
  },
  dark: {
    dark: true,
    colors: {
      text: c.light,
      base: c.dark4,
      background: c.dark,
      card: c.dark2,
      primary: c.sec,
      secondary: c.pri,

      headerBackground: c.dark4,
      buttonText: c.dark,
      button: c.light,
      placeholder: c.dark1,
      altButton: c.dark2,
    }
  },
};
