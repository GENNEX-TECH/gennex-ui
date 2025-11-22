import { Theme } from '@/utilities/theme.utilities';
import { Color, createTheme, PaletteMode } from '@mui/material';
import { viVN } from '@mui/material/locale';

import { colors } from './theme.config';

export const Palette = (opts: {
  mode: PaletteMode;
  primaryColor: Color;
  secondaryColor: Color;
}) => {
  const { mode, primaryColor, secondaryColor } = opts;
  const paletteColor = Theme({ primaryColor, secondaryColor });

  return createTheme(
    {
      palette: {
        ...paletteColor,
        mode,
        common: {
          black: colors.hiContrast,
          white: colors.loContrast,
        },
        text: {
          primary: paletteColor.dark.dark,
          secondary: paletteColor.dark.light,
          disabled: paletteColor.dark.lighter,
        },
        action: {
          disabled: paletteColor.primary.A200,
        },
        divider: paletteColor.dark.lighter,
        background: {
          paper: colors.panel,
        },
      },
    },
    viVN,
  );
};
