import type { ThemeOptions } from '@mui/material';
import type { Theme, TypographyVariants } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { merge } from 'lodash';

import { fonts, media } from '@/themes';
import { componentsOverride } from '@/themes/core';
import { Typography } from '@/themes/typography';
import { RenderThemeOptions } from '@/types';
import { Palette } from '@/themes/palette';

export const renderTheme = (props: RenderThemeOptions): Theme => {
  const { mode = 'light', preset, overrideOptions, overrideComponents } = props;
  const isDark = mode === 'dark';

  const themeTypography: Partial<TypographyVariants> = Typography({
    fontFamily: [fonts.roboto],
  });
  const theme = Palette({ mode, preset, isDark });

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
    palette: theme.palette,
    typography: themeTypography,
  };

  const mergeThemeOptions = { ...themeOptions, ...overrideOptions };

  const baseTheme: any = createTheme(mergeThemeOptions);

  const componentsDefault = componentsOverride({ theme: baseTheme });

  const themeWithOverrides = createTheme(baseTheme, {
    components: overrideComponents
      ? merge(componentsDefault, overrideComponents(baseTheme))
      : componentsDefault,
  });

  const cssVars = {
    '--primary-main': theme.palette.primary.main,
    '--primary-dark': theme.palette.primary.dark,
    '--primary-contrast': theme.palette.primary.contrastText,
    '--bg-default': themeWithOverrides.palette.background.default,
    '--bg-paper': themeWithOverrides.palette.background.paper,
    '--text-primary': themeWithOverrides.palette.text.primary,
  };

  if (typeof document !== 'undefined') {
    Object.entries(cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v as string);
    });
  }

  return themeWithOverrides;
};
