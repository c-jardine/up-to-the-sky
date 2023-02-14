import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { theme } from '../../styles/theme/theme';
import { Navbar } from '../components/Navbar';
import { Montserrat } from '@next/font/google';
import { Footer } from '../components/Footer';

const poppins = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box className={poppins.className}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
