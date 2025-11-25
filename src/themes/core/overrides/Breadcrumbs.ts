import { Theme } from '@mui/material';

import { fontSizes } from '@/themes/theme.config';

export default function Breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          '& > a': {
            fontSize: fontSizes[3],
            fontWeight: 400,
            color: '#5A7087',
            transition:
              'color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease,-webkit-box-shadow .15s ease',
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
  };
}
