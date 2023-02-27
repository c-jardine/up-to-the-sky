import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { theme } from '../../styles/theme/theme';
import { Navbar } from '../components/Navbar';
import { Montserrat } from '@next/font/google';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

const poppins = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
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
      <Box className={poppins.className}>
        <Component {...pageProps} />
      </Box>
      {!router.asPath.startsWith('/studio') && <Footer />}
    </ChakraProvider>
  );
};

export default App;
