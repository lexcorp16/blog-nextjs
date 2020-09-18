import { swiss, deep } from "@theme-ui/presets";

const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: deep.colors,
    },
  },
  styles: {
    ...swiss.styles,
  },
};

export default theme;
