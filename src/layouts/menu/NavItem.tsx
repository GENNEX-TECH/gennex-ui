import React from 'react';

import { useStore, useTranslate } from 'ra-core';
import { useSidebarState } from 'ra-ui-materialui';
import { Link, useLocation } from 'react-router-dom';

import { MenuItemProps } from '@/types';
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

interface IProps {
  items: MenuItemProps[];
  item: MenuItemProps;
  level?: number;
  parent?: string;
  type?: string;
}

export const NavItem: React.FC<IProps> = (props) => {
  const { items, item, level = 1, parent, type } = props;

  const [drawerOpen] = useSidebarState();
  const [menu, setMenu] = useStore<Record<number, string>>('menu', {});

  const location = useLocation();
  const translate = useTranslate();

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: any = {
    component: React.forwardRef((props: any, ref: any) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };

  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    let current = { [level]: id };
    if (parent) {
      current = { ...current, [level - 1]: parent };
    }
    setMenu(current);
  };

  const itemIcon = item.icon
    ? React.cloneElement(item.icon, {
        style: { fontSize: drawerOpen ? '1rem' : '1.25rem' },
      } as any)
    : false;

  const getMenu = (path: string, itemHasChildren: MenuItemProps[]) => {
    let newMenu;
    for (const it of itemHasChildren) {
      const { id, children } = it;
      if (children && Array.isArray(children)) {
        const selected = (children as unknown as MenuItemProps[]).find(
          (child: MenuItemProps) => child.url === path,
        );
        if (selected) {
          newMenu = { [level - 1]: id, [level]: selected.id };
        } else {
          getMenu(path, children as unknown as MenuItemProps[]);
        }
      }
    }
    return newMenu;
  };

  React.useEffect(() => {
    const currentPath = location?.pathname;
    const selectedItem = items.find((it: MenuItemProps) => it.url === currentPath);
    if (selectedItem && level === 1) {
      setMenu({ 1: selectedItem?.id ?? '' });
    } else {
      const itemHasChildren = items.filter((it: MenuItemProps) => it.children);
      const nMenu = getMenu(currentPath, itemHasChildren);
      if (nMenu) {
        setMenu({ ...nMenu });
      }
    }
  }, [location?.pathname]);

  const isSelected = React.useMemo(() => {
    if (menu) {
      let parentSelected = true;
      if (menu[level - 1] && parent) {
        parentSelected = menu[level - 1] === parent;
      }
      const selected = menu[level] === item.id;
      return parentSelected && selected;
    } else {
      return false;
    }
  }, [menu]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}>
      {itemIcon && <ListItemIcon sx={{ color: '#8E4EC6' }}>{itemIcon}</ListItemIcon>}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography
              variant="h5"
              sx={{ paddingLeft: type === 'collapse' ? (level > 2 ? (level - 1) * 5 : 5) : 0 }}>
              {translate(item.id, { smart_count: 1 })}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant as 'filled' | 'outlined'}
          label={item.chip.label}
          avatar={item.chip.avatar ? <Avatar>{item.chip.avatar}</Avatar> : undefined}
        />
      )}
    </ListItemButton>
  );
};
