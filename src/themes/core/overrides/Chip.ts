import { radius, sizes, fonts, fontSizes } from '@/themes/theme.config';
import { Theme } from '@mui/material';

export default function Chip(theme: Theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: radius[1],
          '&:active': {
            boxShadow: 'none',
          },
          margin: theme.spacing(1),
          height: sizes[5],
        },
        label: {
          lineHeight: sizes[4],
          fontWeight: 400,
          fontFamily: fonts.publicSans,
          fontSize: fontSizes[3],
        },
        sizeLarge: {
          fontSize: fontSizes[4],
          height: sizes[6],
        },
        sizeSmall: {
          '& .MuiChip-label': {
            fontSize: fontSizes[1],
            fontWeight: 600,
            lineHeight: sizes[3],
          },
          //fontSize: fontSizes[1],
          height: sizes[4],
        },
        light: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.light,
          borderColor: theme.palette.primary.light,
          '&.MuiChip-lightError': {
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.light,
          },
          '&.MuiChip-lightSuccess': {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
            borderColor: theme.palette.success.light,
          },
          '&.MuiChip-lightWarning': {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.warning.light,
            borderColor: theme.palette.warning.light,
          },
        },
      },
    },
  };
}
