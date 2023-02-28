import { Box, ChakraProvider, Spinner } from '@chakra-ui/react';
import { Montserrat } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../../styles/globals.css';
import { theme } from '../../styles/theme/theme';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useLoading } from '../hooks';

const poppins = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { isLoading } = useLoading();
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        titleTemplate="%s | Up to the Sky"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.uptothesky.org',
          siteName: 'Up to the Sky',
          images: [
            {
              url: '/images/caring-hands-holding-share.png',
              width: 1200,
              height: 630,
              alt: 'Caring hands embracing',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      {!router.asPath.startsWith('/studio') && <Navbar />}
      <Box position="relative" className={poppins.className}>
        {!router.asPath.startsWith('/studio') && isLoading && (
          <Box
            position="fixed"
            top={0}
            left={0}
            w="full"
            h="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="whiteAlpha.800"
            zIndex={10}
          >
            <Spinner color="primary.500" size="xl" />
          </Box>
        )}
        <Component {...pageProps} />
      </Box>
      {!router.asPath.startsWith('/studio') && <Footer />}
    </ChakraProvider>
  );
};

export default App;
