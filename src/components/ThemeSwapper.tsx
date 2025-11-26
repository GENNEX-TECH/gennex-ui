import React from 'react';

import { IconButton, Menu, MenuItem, Box } from '@mui/material';

import { useGlobalThemeContext } from '@/providers';
import { THEME, themeOptions, themePresets } from '@/constants';
import { MoonIcon, PaletteIcon, SunIcon } from 'lucide-react';

interface IProps {
  expanded?: boolean;
}

export const ThemeSwapper: React.FC<IProps> = (props) => {
  const { expanded = false } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const { theme, themeName, setThemeName, themeMode, toggleThemeMode } = useGlobalThemeContext();

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleChange = React.useCallback(
    (_: React.MouseEvent<HTMLElement>, index: number) => {
      const newTheme = themeOptions[index];
      setThemeName(newTheme.name);
      setAnchorEl(null);
    },
    [setThemeName],
  );

  return expanded ? (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <IconButton color="primary">
          <PaletteIcon />
        </IconButton>
        <span>Theme</span>
      </div>
      {themePresets.map((t: { name: string; label: string }, index: number) => (
        <MenuItem
          key={t.name}
          onClick={(e) => handleChange(e, index)}
          selected={themeName === t.name}>
          {t.label}
        </MenuItem>
      ))}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <IconButton onClick={toggleThemeMode} color="primary">
          {themeMode === THEME.LIGHT_MODE_THEME ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <span>Mode</span>
      </div>
    </Box>
  ) : (
    <div style={{ display: 'flex', gap: 5 }}>
      <IconButton onClick={handleClick} color="primary">
        <PaletteIcon />
      </IconButton>
      {theme.dark && (
        <IconButton onClick={toggleThemeMode} color="primary">
          {themeMode === THEME.LIGHT_MODE_THEME ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      )}
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {themeOptions.map((theme, index: number) => (
          <MenuItem
            onClick={(event) => handleChange(event, index)}
            value={theme.name}
            key={theme.name}
            selected={theme.name === themeName}>
            {ucFirst(theme.name)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const ucFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
