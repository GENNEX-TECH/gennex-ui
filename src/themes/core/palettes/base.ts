import {
  blue,
  blueA, // ← Thêm blueA
  grass,
  grassA,
  cyan,
  cyanA,
  amber,
  amberA,
  tomato,
  tomatoA,
  violet,
  violetA,
  slate,
  slateA,
  mauve,
  mauveA,
  indigo,
  indigoA,
  orange,
  orangeA,
} from '@radix-ui/colors';

import { mapScale } from '@/utilities';

export const palette = {
  blue: mapScale('blue', blue, blueA),
  grass: mapScale('grass', grass, grassA),
  cyan: mapScale('cyan', cyan, cyanA),
  amber: mapScale('amber', amber, amberA),
  tomato: mapScale('tomato', tomato, tomatoA),
  violet: mapScale('violet', violet, violetA),
  slate: mapScale('slate', slate, slateA),
  mauve: mapScale('mauve', mauve, mauveA),
  indigo: mapScale('indigo', indigo, indigoA),
  orange: mapScale('orange', orange, orangeA),
};

console.log(palette);
