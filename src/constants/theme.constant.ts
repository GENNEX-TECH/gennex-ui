import {
  amberDarkTheme,
  amberLightTheme,
  cyanDarkTheme,
  cyanLightTheme,
  darkTheme,
  grassDarkTheme,
  grassLightTheme,
  indigoDarkTheme,
  indigoLightTheme,
  lightTheme,
  mauveDarkTheme,
  mauveLightTheme,
  orangeDarkTheme,
  orangeLightTheme,
  slateDarkTheme,
  slateLightTheme,
  tomatoDarkTheme,
  tomatoLightTheme,
  violetDarkTheme,
  violetLightTheme,
} from '@/themes';
import { Theme, ThemeName } from '@/types';
import { renderTheme } from '@/utilities';
import { LOCALE_VI } from './common.constant';

export namespace THEME {
  export const THEME_BLUE = 'blue';
  export const THEME_GRASS = 'grass';
  export const THEME_TOMATO = 'tomato';
  export const THEME_SLATE = 'slate';
  export const THEME_MAUVE = 'mauve';
  export const THEME_INDIGO = 'indigo';
  export const THEME_VIOLET = 'violet';
  export const THEME_ORANGE = 'orange';
  export const THEME_CYAN = 'cyan';
  export const THEME_AMBER = 'amber';

  export const DARK_MODE_THEME = 'dark';
  export const LIGHT_MODE_THEME = 'light';
}

export const DEFAULT_THEME = THEME.THEME_BLUE;
export const LOCALE_DEFAULT = LOCALE_VI;

export const ThemesMap: Record<ThemeName, Theme> = {
  [THEME.THEME_BLUE]: {
    name: THEME.THEME_BLUE,
    light: lightTheme,
    dark: darkTheme,
  },
  [THEME.THEME_GRASS]: {
    name: THEME.THEME_GRASS,
    light: grassLightTheme,
    dark: grassDarkTheme,
  },
  [THEME.THEME_INDIGO]: {
    name: THEME.THEME_INDIGO,
    light: indigoLightTheme,
    dark: indigoDarkTheme,
  },
  [THEME.THEME_VIOLET]: {
    name: THEME.THEME_VIOLET,
    light: violetLightTheme,
    dark: violetDarkTheme,
  },
  [THEME.THEME_ORANGE]: {
    name: THEME.THEME_ORANGE,
    light: orangeLightTheme,
    dark: orangeDarkTheme,
  },
  [THEME.THEME_CYAN]: {
    name: THEME.THEME_CYAN,
    light: cyanLightTheme,
    dark: cyanDarkTheme,
  },
  [THEME.THEME_AMBER]: {
    name: THEME.THEME_AMBER,
    light: amberLightTheme,
    dark: amberDarkTheme,
  },
  [THEME.THEME_TOMATO]: {
    name: THEME.THEME_TOMATO,
    light: tomatoLightTheme,
    dark: tomatoDarkTheme,
  },
  [THEME.THEME_SLATE]: {
    name: THEME.THEME_SLATE,
    light: slateLightTheme,
    dark: slateDarkTheme,
  },
  [THEME.THEME_MAUVE]: {
    name: THEME.THEME_MAUVE,
    light: mauveLightTheme,
    dark: mauveDarkTheme,
  },
};

export const themeOptions: Theme[] = [
  { name: 'blue', light: lightTheme, dark: darkTheme },
  { name: 'indigo', light: indigoLightTheme, dark: indigoDarkTheme },
  { name: 'violet', light: violetLightTheme, dark: violetDarkTheme },
  { name: 'orange', light: orangeLightTheme, dark: orangeDarkTheme },
  { name: 'cyan', light: cyanLightTheme, dark: cyanDarkTheme },
  { name: 'amber', light: amberLightTheme, dark: amberDarkTheme },
];

export const themePresets = [
  { name: 'blue', label: 'Blue' },
  { name: 'violet', label: 'Violet' },
  { name: 'indigo', label: 'Indigo' },
  { name: 'orange', label: 'Orange' },
  { name: 'cyan', label: 'Cyan' },
  { name: 'amber', label: 'Amber' },
] as const;

export type ThemePresetName = (typeof themePresets)[number]['name'];

export const getPresetTheme = (name: ThemePresetName, mode: 'light' | 'dark') => {
  return renderTheme({ mode, preset: name });
};