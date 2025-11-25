import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Link as LinkTo, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { useTranslate } from 'ra-core';

import { BreadcrumbProps, TBreadcrumbItem } from '@/types';

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { resources, separator = <ChevronRight />, ...rest } = props;

  // --------------------------------------------------
  const location = useLocation();
  const history = useNavigate();
  const translate = useTranslate();
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down('sm'));

  // --------------------------------------------------
  const handleClick = (to: string) => {
    history(to);
  };

  const _breadcrumbResources = props?.resources || resources;

  const currentBreadcrumbs = React.useMemo(() => {
    const { pathname } = location;
    const partsId = pathname?.match(/\/([^/]+)\/(edit|show)/) || [];
    const id = partsId[1];

    const paths = pathname.split('/').filter((it) => it && Number.isNaN(Number(it)) && it !== id);
    const menus = paths
      ?.map((it) => _breadcrumbResources[it] ?? { title: it })
      .filter((item) => item);
    return menus;
  }, [location]);

  const visibleBreadcrumbs = React.useMemo(() => {
    if (smallSize && currentBreadcrumbs.length > 3) {
      const lastTwo = currentBreadcrumbs.slice(-2);
      return [currentBreadcrumbs[0], ...lastTwo];
    }
    return currentBreadcrumbs;
  }, [currentBreadcrumbs, smallSize]);

  return (
    <Breadcrumbs separator={separator} aria-label="breadcrumb" {...rest}>
      <Typography sx={{ textDecoration: 'none' }} color="text.secondary" component={Link} to="/">
        {translate('menu.home.name')}
      </Typography>
      {visibleBreadcrumbs.map((item: TBreadcrumbItem, index: number) => {
        const { url: to, title } = item;
        const isLast = index === visibleBreadcrumbs.length - 1;
        return isLast || !to ? (
          <Typography key={index} color="text.primary">
            {translate(title)}
          </Typography>
        ) : (
          <Typography
            component={LinkTo}
            key={index}
            onClick={() => {
              handleClick(to);
            }}
            color="text.secondary"
            sx={{ '&:hover': { textDecoration: 'none', cursor: 'pointer' } }}>
            {translate(title)}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export const MemoizedBreadcrumb = React.memo(Breadcrumb);
