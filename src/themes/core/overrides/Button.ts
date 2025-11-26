import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 40,
          padding: '0px 15px',
          borderRadius: '6px !important',
          fontSize: '14px !important',
          fontWeight: '400 !important',
          textTransform: 'inherit',
          '& > .MuiButton-startIcon': {
            marginLeft: '0 !important',
            marginRight: '6px !important',
            width: '18px',
          },
        },
        text: {
          '&:disabled': {
            color: '#d3d3d3',
          },
        },
        textPrimary: {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
          '&:disabled': {
            color: theme.palette.grey[300],
            backgroundColor: theme.palette.grey[300],
          },
        },
      },
    },
  };
}
