import { coSheme17117 as c } from './colors';

export const themes = {
  light: {
    dark: false,
    colors: {
      text: c.dark,
      base: c.light4,
      background: c.light,
      card: c.light2,
      primary: c.sec,
      secondary: c.pri,
      pril: c.secl,
      prid: c.secd,
      borderColor: c.light4,

      top: c.light1,
      headerBackground: c.light4,
      buttonText: c.light,
      button: c.dark,
      placeholder: c.dark1,
      altButton: c.light2,
      light: c.light1,
      dark: c.light5,
    }
  },
  dark: {
    dark: true,
    colors: {
      text: c.light,
      base: c.dark4,
      background: c.dark,
      card: c.dark2,
      primary: c.pri,
      secondary: c.sec,
      pril: c.pril,
      prid: c.prid,
      borderColor: c.dark1,


      top: c.dark1,
      headerBackground: c.dark4,
      buttonText: c.dark,
      button: c.light,
      placeholder: c.light5,
      altButton: c.dark2,
      light: c.dark1,
      dark: c.dark5,
    }
  },
};
