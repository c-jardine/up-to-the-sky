import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import { ButtonStyle } from './components/ButtonStyle';

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html,body': {
        bg: 'white',
      },
      a: {
        transition: '200ms ease-in-out',
        _hover: {
          textDecoration: 'none !important',
        },
      },
    },
  },
  components: {
    Button: ButtonStyle,
  },
});
