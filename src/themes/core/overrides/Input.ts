export default function Input() {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& fieldset span': {
            paddingLeft: 0,
            paddingRight: 0,
          },
          '& fieldset': {
            borderColor: `#CED4DA !important`,
          },
          '&:hover fieldset': {
            borderColor: '#CED4DA !important',
          },
          '&:disabled fieldset': {
            borderColor: '#CED4DA !important',
          },
          '&.Mui-disabled': {
            backgroundColor: '#f0f0f0b3',
            '& button': {
              backgroundColor: 'transparent',
            },
          },
          input: {
            '&.Mui-disabled': {
              //'-webkit-text-fill-color': '#e0e0e0',
              '-webkit-text-fill-color': 'rgb(0 0 0 / 38%)',
            },
            '&::placeholder': {
              color: '#bdccd9',
              opacity: 1,
            },
            '&::-ms-input-placeholder': {
              color: '#bdccd9',
              opacity: 1,
            },
            '&:-ms-input-placeholder': {
              color: '#bdccd9',
              opacity: 1,
            },
          },
        },
      },
    },
  };
}
