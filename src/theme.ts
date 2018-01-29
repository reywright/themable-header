interface Theme {
    colors: {
        [key: string]: string;
    };
    sizing: {
        [key: string]: string;
    };
    font: {
        weight: {
          [key: string]: number;
        }
        sizes: {
          [key: string]: string
        }
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
  ...baseTheme
};

export const bibmeTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        blue: '#EBF7FE'
    }
};

console.log(bibmeTheme);