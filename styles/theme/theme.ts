import { extendTheme } from '@chakra-ui/react';
import { ButtonStyle } from './components/ButtonStyle';

export const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        bg: 'white',
      },
    },
  },
  components: {
    Button: ButtonStyle,
  },
});
