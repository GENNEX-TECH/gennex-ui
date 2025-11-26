export const mapScale = (name: string, light: any, alpha: any) => ({
  '50': light[`${name}1`],
  '100': light[`${name}2`],
  '200': light[`${name}3`],
  '300': light[`${name}4`],
  '400': light[`${name}5`],
  '500': light[`${name}6`],
  '600': light[`${name}7`],
  '700': light[`${name}8`],
  main: light[`${name}9`],
  dark: light[`${name}10`],
  darker: light[`${name}11`],
  contrastText: light[`${name}12`],
  // dark variants
  '50d': alpha[`${name}A1`],
  '100d': alpha[`${name}A2`],
  '200d': alpha[`${name}A3`],
  '300d': alpha[`${name}A4`],
  '400d': alpha[`${name}A5`],
  '500d': alpha[`${name}A6`],
  '600d': alpha[`${name}A7`],
  '700d': alpha[`${name}A8`],
  mainD: alpha[`${name}A9`],
  darkD: alpha[`${name}A10`],
  darkerD: alpha[`${name}A11`],
  contrastTextD: alpha[`${name}A12`],
});

export const createMUIColor = (lightColor: any, darkColor: any, isDark: boolean) => {
  const main = isDark ? darkColor.mainD : lightColor.main;
  const dark = isDark ? darkColor.darkD : lightColor.dark;
  const contrastText = isDark ? darkColor.contrastTextD : lightColor.contrastText;

  return {
    main,
    dark,
    contrastText,
    mainD: darkColor.mainD,
    darkD: darkColor.darkD,
    contrastTextD: darkColor.contrastTextD,
    ...(isDark
      ? {}
      : {
          mainD: lightColor.main,
          darkD: lightColor.dark,
          contrastTextD: lightColor.contrastText,
        }),
  };
};
