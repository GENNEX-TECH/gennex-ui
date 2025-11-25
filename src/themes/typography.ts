export const Typography = (opts: { fontFamily: string[] }) => ({
  fontFamily: opts.fontFamily.join(', '),
  button: {
    textTransform: 'capitalize',
  },
});
