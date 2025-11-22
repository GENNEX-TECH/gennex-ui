import { createTheme, ThemeOptions } from '@mui/material';
import { blue, green } from '@mui/material/colors';

import { Typography } from './typography';
import { fonts } from './theme.config';
import { viVN } from '@mui/material/locale';

export const defaultTheme = () => {
  const typography: any = Typography({ fontFamily: [fonts.nunito] });
  const options: ThemeOptions = {
    typography,
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
  };
  const theme = createTheme(options, viVN);
  return theme;
};
