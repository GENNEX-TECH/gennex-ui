import { createTheme, PaletteMode } from '@mui/material';
import { viVN } from '@mui/material/locale';

import { palette } from '@/themes/core';
import { createMUIColor } from '@/utilities';

export const Palette = (opts: {
  mode: PaletteMode;
  preset?: keyof typeof palette;
  isDark: boolean;
}) => {
  const { mode, preset = 'blue', isDark } = opts;

  const paletteColor = palette[preset];

  const primary = {
    ...paletteColor, // spread trước

    // GHI ĐÈ SAU → chắc chắn thắng
    main: isDark ? paletteColor.mainD : paletteColor.main,
    dark: isDark ? paletteColor.darkD : paletteColor.dark,
    darker: paletteColor.darkerD ?? paletteColor.darker,
    contrastText: isDark ? paletteColor.contrastTextD : paletteColor.contrastText,

    // Đảm bảo có mainD cho MUI
    mainD: paletteColor.mainD ?? paletteColor.main,
    darkD: paletteColor.darkD ?? paletteColor.dark,
    contrastTextD: paletteColor.contrastTextD ?? paletteColor.contrastText,
  };

  return createTheme(
    {
      palette: {
        mode,
        primary,
        error: createMUIColor(palette.tomato, palette.tomato, isDark),
        warning: createMUIColor(palette.amber, palette.amber, isDark),
        info: createMUIColor(palette.cyan, palette.cyan, isDark),
        success: createMUIColor(palette.grass, palette.grass, isDark),
        background: {
          default: isDark ? '#0f0f0f' : '#ffffff',
          paper: isDark ? palette.slate['50d'] : '#ffffff',
        },
        divider: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
      },
    },
    viVN,
  );
};
