import React from 'react';

import { Box, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { BrowserView, MobileView } from 'react-device-detect';
import SimpleBar from 'simplebar-react';

import { SimpleBarScrollProps } from '@/types';

const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[500], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

export const SimpleBarScroll: React.FC<SimpleBarScrollProps> = ({ children, sx, ...other }) => {
  return (
    <React.Fragment>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </React.Fragment>
  );
};
