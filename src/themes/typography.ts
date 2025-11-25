import { fontSizes, sizes } from '@/themes/theme.config';

export const Typography = (opts: { fontFamily: string[] }) => ({
  fontFamily: opts.fontFamily.join(', '),
  htmlFontSize: 16,
  fontSize: fontSizes[2],
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: fontSizes[7], // 27
    lineHeight: sizes[7], // 40px
  },
  h2: {
    fontWeight: 500,
    fontSize: fontSizes[6], // 21
    lineHeight: sizes[7], // 40px
  },
  h3: {
    fontWeight: 500,
    fontSize: fontSizes[5], // 19
    lineHeight: sizes[6], // 32px
  },
  h4: {
    fontWeight: 500,
    fontSize: fontSizes[4], // 17
    lineHeight: sizes[5], // 28px
  },
  h5: {
    fontWeight: 500,
    fontSize: fontSizes[3], // 15
    lineHeight: sizes[5], // 28px
  },
  h6: {
    fontWeight: 400,
    fontSize: fontSizes[2], // 14
    lineHeight: sizes[4], // 22px
  },
  caption: {
    fontWeight: 400,
    fontSize: fontSizes[1], // 12
    lineHeight: sizes[3], // 18px
  },
  body1: {
    fontSize: fontSizes[2], // 14
    lineHeight: sizes[4], // 22px
  },
  body2: {
    fontSize: fontSizes[2], // 14
    lineHeight: sizes[4], // 22px
  },
  subtitle1: {
    fontSize: fontSizes[1], // 12
    fontWeight: 600,
    lineHeight: sizes[3], // 18px
  },
  subtitle2: {
    fontSize: fontSizes[1], // 12
    fontWeight: 500,
    lineHeight: sizes[3], // 18px
  },
  overline: {
    lineHeight: sizes[3], // 18px
  },
  button: {
    textTransform: 'capitalize',
    fontSize: fontSizes[2], // 14px
    fontWeight: 500,
    lineHeight: 1.75,
  },
});
