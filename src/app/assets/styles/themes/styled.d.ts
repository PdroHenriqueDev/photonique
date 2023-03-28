import 'styled-components';

interface IPalette {
  lighter?: string;
  light: string;
  main: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      primary: IPalette;
      danger: IPalette;
      success: {
        main: string;
      };
    };
  }
}
