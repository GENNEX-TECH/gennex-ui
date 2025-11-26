import type { ReactNode } from 'react';
import React from 'react';

import type {
  Color,
  Components,
  Theme as MuiTheme,
  PaletteMode,
  SxProps,
  ThemeOptions,
} from '@mui/material';
import type { RaThemeOptions } from 'ra-ui-materialui';

export type ThemeMode = 'light' | 'dark';
export type ThemeName =
  | 'blue'
  | 'grass'
  | 'tomato'
  | 'violet'
  | 'indigo'
  | 'orange'
  | 'cyan'
  | 'amber'
  | 'slate'
  | 'mauve';
export type PresetTheme =
  | 'blue'
  | 'grass'
  | 'tomato'
  | 'violet'
  | 'indigo'
  | 'orange'
  | 'cyan'
  | 'amber'
  | 'slate'
  | 'mauve';
export interface Theme {
  name: ThemeName;
  light: RaThemeOptions;
  dark?: RaThemeOptions;
}

export type TBreadcrumbItem = {
  url: string;
  title: string;
};

export type BreadcrumbProps = {
  sx?: SxProps<MuiTheme>;
  resources: Record<string, TBreadcrumbItem>;
  separator?: ReactNode;
};

export type SimpleBarScrollProps = {
  sx: SxProps<MuiTheme>;
  children: React.ReactElement;
};

export type MenuItemProps = {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapse';
  url?: string;
  icon?: React.ReactElement;
  breadcrumbs: boolean;
  external?: string;
  target?: string | boolean;
  disabled?: boolean;
  hidden?: boolean;
  chip?: {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    variant?: 'filled' | 'outlined' | 'standard';
    label?: React.ReactNode;
    avatar?: React.ReactNode;
  };
  children?: React.ReactElement | React.ReactElement[];
  resource?: string | string[];
  actions?: string[];
  groupBy?: string;
};

export interface RenderThemeOptions {
  mode: PaletteMode;
  preset?: PresetTheme;
  primary?: Color;
  overrideOptions?: ThemeOptions;
  overrideComponents?: (theme: Theme) => Partial<Components<Omit<Theme, 'components'>>>;
}
