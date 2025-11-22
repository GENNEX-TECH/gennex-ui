import {
  createTheme,
  Theme as TTheme,
  type Color,
  type PaletteMode,
  type ThemeOptions,
} from '@mui/material';
import { merge } from 'lodash';

import {
  amber,
  blue,
  colors,
  cyan,
  fonts,
  grass,
  lightBlue,
  media,
  Palette,
  sizes,
  slate,
  spaces,
  tomato,
  Typography,
} from '@/themes';
import componentsOverride from '@/themes/core/overrides';

export const Theme = (opts: { primaryColor: Color; secondaryColor: Color }) => {
  const { primaryColor, secondaryColor } = opts;
  const contrastText = colors.hiContrast;

  return {
    primary: {
      lighter: primaryColor[50],
      100: primaryColor[100],
      200: primaryColor[200],
      light: primaryColor[300],
      400: primaryColor[400],
      main: primaryColor[500],
      600: primaryColor[600],
      dark: primaryColor[700],
      darker: primaryColor[800],
      900: primaryColor[900],
      A100: primaryColor.A100,
      A200: primaryColor.A200,
      A400: primaryColor.A400,
      A700: primaryColor.A700,
      contrastText: '#fff',
    },
    secondary: {
      lighter: secondaryColor[50],
      100: secondaryColor[100],
      200: secondaryColor[200],
      light: secondaryColor[300],
      400: secondaryColor[400],
      main: secondaryColor[500],
      600: secondaryColor[600],
      dark: secondaryColor[700],
      darker: secondaryColor[800],
      900: secondaryColor[900],
      A100: secondaryColor.A100,
      A200: secondaryColor.A200,
      A400: secondaryColor.A400,
      A700: secondaryColor.A700,
      contrastText: '#fff',
    },
    error: {
      lighter: tomato[50],
      light: tomato[300],
      main: tomato[500],
      dark: tomato[600],
      darker: tomato[800],
      contrastText: '#fff',
    },
    warning: {
      lighter: amber[50],
      light: amber[300],
      main: amber[500],
      dark: amber[600],
      darker: amber[800],
      contrastText,
    },
    info: {
      lighter: cyan[50],
      light: cyan[300],
      main: cyan[500],
      dark: cyan[600],
      darker: cyan[800],
      contrastText,
    },
    success: {
      lighter: grass[50],
      light: grass[300],
      main: grass[500],
      dark: grass[600],
      darker: grass[800],
      contrastText: '#fff',
    },
    dark: {
      lighter: slate[50],
      light: slate[400],
      main: slate[500],
      dark: slate[700],
      darker: slate[900],
      contrastText: slate[500],
    },
  };
};

export const renderTheme = (opts: {
  mode: PaletteMode;
  overrideOptions?: ThemeOptions;
  overrideComponents?: any;
}) => {
  const { mode, overrideOptions = {}, overrideComponents = {} } = opts;
  const themeTypography: any = Typography({ fontFamily: [fonts.roboto] });
  const theme = Palette({ mode, primaryColor: blue, secondaryColor: lightBlue });

  const themeOptions: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: media.bp1,
        md: media.bp2,
        lg: media.bp3,
        xl: media.bp4,
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    direction: 'ltr',
    spacing: 5,
    mixins: {
      toolbar: {
        minHeight: sizes[8],
        paddingTop: spaces[1],
        paddingBottom: spaces[1],
      },
    },
    palette: theme.palette,
    typography: themeTypography,
  };

  const mergedOptions: ThemeOptions = { ...themeOptions, ...overrideOptions };

  const themes: TTheme = createTheme(mergedOptions);
  let components = componentsOverride({ theme: themes });
  if (overrideComponents) {
    components = merge(components, overrideComponents(themes));
  }
  themes.components = components;
  return themes;
};
