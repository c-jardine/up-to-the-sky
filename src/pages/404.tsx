import { Container, Heading } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => {
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <Container py={32}>
        <Heading as="h1" textAlign="center">
          Page not found
        </Heading>
      </Container>
    </>
  );
};
export default NotFoundPage;
