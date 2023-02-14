export const ButtonStyle = {
  variants: {
    nav: {
      px: 2,
      letterSpacing: 'wide',
    },
    primary: {
      bg: '#5282c1',
      color: 'white',
      // textTransform: 'uppercase',
      letterSpacing: 'wide',
      fontWeight: 'bold',
      rounded: 'full',
      transition: '200ms ease-in-out',
      _hover: {
        filter: 'brightness(110%)',
      },
      _active: {
        filter: 'brightness(90%)',
      },
    },
    secondary: {
      bg: '#00857C',
      color: 'white',
      // textTransform: 'uppercase',
      letterSpacing: 'wide',
      fontWeight: 'bold',
      rounded: 'full',
      transition: '200ms ease-in-out',
      _hover: {
        filter: 'brightness(110%)',
      },
      _active: {
        filter: 'brightness(90%)',
      },
    },
  },
};
