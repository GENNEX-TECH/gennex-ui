import { styled, LinearProgress, LinearProgressProps } from '@mui/material';

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

export const PageLoading = (props: LinearProgressProps) => {
  return (
    <LoaderWrapper>
      <LinearProgress
        sx={props.sx}
        color={props.color}
        value={props.value}
        valueBuffer={props.valueBuffer}
        variant={props.variant}
      />
    </LoaderWrapper>
  );
};
