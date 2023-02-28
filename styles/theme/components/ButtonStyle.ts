export const ButtonStyle = {
  variants: {
    nav: {
      px: 2,
      letterSpacing: 'wide',
    },
    primary: {
      bg: 'primary.500',
      color: 'white',
      px: 8,
      py: 6,
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
      bg: 'secondary.500',
      color: 'white',
      px: 8,
      py: 6,
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
