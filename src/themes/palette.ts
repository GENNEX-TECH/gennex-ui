import { GenColorPalette } from '@/utilities/theme.utilities';
import { Color, createTheme, PaletteMode } from '@mui/material';
import { viVN } from '@mui/material/locale';

import { colors } from './theme.config';

export const Palette = (opts: {
  mode: PaletteMode;
  primaryColor: Color;
  secondaryColor: Color;
}) => {
  const { mode, primaryColor, secondaryColor } = opts;

  const isDark = mode === 'dark';

  const paletteColor = GenColorPalette({ primaryColor, secondaryColor });

  return createTheme(
    {
      palette: {
        ...paletteColor,
        mode,
        common: {
          black: colors.hiContrast,
          white: colors.loContrast,
        },
        text: isDark
          ? {
              primary: paletteColor.primary.light,
              secondary: paletteColor.primary.lighter,
              disabled: paletteColor.primary.A200,
            }
          : {
              primary: paletteColor.dark.dark,
              secondary: paletteColor.dark.light,
              disabled: paletteColor.dark.lighter,
            },
        action: {
          disabled: isDark ? paletteColor.dark.main : paletteColor.dark.lighter,
        },
        divider: paletteColor.dark.light,
        background: isDark
          ? {
              paper: '#1A1A1A',
              default: '#141414',
            }
          : {
              paper: colors.panel,
              default: colors.loContrast,
            },
      },
    },
    viVN,
  );
};
