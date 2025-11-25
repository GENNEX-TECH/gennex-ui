import { darkTheme, greenDarkTheme, greenLightTheme, lightTheme } from '@/themes';
import { Theme, ThemeName } from '@/types';
import { LOCALE_VI } from './common.constant';

export namespace THEME {
  export const THEME_PURPLE = 'purple';
  export const THEME_GREEN = 'green';
  export const THEME_PINK = 'pink';
  export const THEME_BLUE = 'blue';
  export const THEME_SOFT = 'soft';
  export const DARK_MODE_THEME = 'dark';
  export const LIGHT_MODE_THEME = 'light';
  export const THEME_NEUTRAL = 'neutral';
}

export const DEFAULT_THEME = THEME.THEME_BLUE;
export const LOCALE_DEFAULT = LOCALE_VI;

export const ThemesMap: Record<ThemeName, Theme> = {
  [THEME.THEME_BLUE]: {
    name: THEME.THEME_BLUE,
    light: lightTheme,
    dark: darkTheme,
  },
  [THEME.THEME_GREEN]: {
    name: THEME.THEME_GREEN,
    light: greenLightTheme,
    dark: greenDarkTheme,
  },
};

export const themeOptions: Theme[] = [
  { name: 'blue', light: lightTheme, dark: darkTheme },
  { name: 'green', light: greenLightTheme, dark: greenDarkTheme },
];
