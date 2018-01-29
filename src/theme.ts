import { injectGlobal } from 'styled-components';

interface Theme {
  colors: {
    [key: string]: string;
  };
  sizing: {
    [key: string]: string;
  };
  font: {
    family: string;
    weight: {
      [key: string]: number;
    };
    sizes: {
      [key: string]: string;
    };
  };
}

export const baseTheme: Theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    gray: '#666'
  },
  sizing: {
    paddingVertical: '8px',
    paddingHorizontal: '8px'
  },
  // Example of standardizing sizing to align design and dev
  font: {
    family:
      // tslint:disable-next-line
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    weight: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 800
    },
    sizes: {
      base: '16px',
      small: '12px'
    }
  }
};

export const easybibTheme = {
  ...baseTheme,
  site: 'easybib'
};

export const bibmeTheme = {
  ...baseTheme,
  site: 'bibme',
  font: {
    ...baseTheme.font,
    family: '"Helvetica Neue", Helvetica, sans-serif'
  },
  colors: {
    ...baseTheme.colors,
    blue: '#1B3B54'
  }
};

/**
 * This is for things like font-family / Normalization
 */

// tslint:disable
export const globalCss = () => injectGlobal`
    html, body {
        margin: 0;
        padding: 0;
`;
