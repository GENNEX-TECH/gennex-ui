import { Theme } from '@mui/material';
import merge from 'lodash/merge';

import Chip from './Chip';
import Input from './Input';

// ==============================|| OVERRIDES - MAIN ||============================== //
export default function componentsOverride(opts: { theme: Theme }) {
  const { theme } = opts;
  return merge(Input(), Chip(theme));
}
