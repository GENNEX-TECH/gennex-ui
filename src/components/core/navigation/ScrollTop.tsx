import React from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {
  children: React.ReactElement;
}

export const ScrollTop: React.FC<IProps> = (props) => {
  const { children } = props;
  const location = useLocation();
  const { pathname } = location;

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children || null;
};
