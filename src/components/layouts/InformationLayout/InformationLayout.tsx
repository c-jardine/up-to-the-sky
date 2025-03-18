import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Spectral } from 'next/font/google';
import React from 'react';
import { DetailsList } from '../../DetailsList';

const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

interface InformationalLayoutProps {
  smallTitle: string;
  title: string;
  children: React.ReactNode;
}

const InformationLayout = (props: InformationalLayoutProps) => {
  return (
    <Stack spacing={{ base: 20, md: 28 }} alignItems="center" mb={24}>
      <Box w="full">
        <Box w="full" h={40} bg="primary.400" />
        <Container maxW="8xl" w="full" mt={{ base: -16, md: -28 }}>
          <Stack
            bg="white"
            shadow="lg"
            px={{ base: 4, sm: 8, md: 20 }}
            py={{ base: 4, md: 12 }}
          >
            <Text
              className={spectral.className}
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              fontWeight="bold"
              fontStyle="italic"
              color="primary.500"
            >
              {props.smallTitle}
            </Text>
            <Heading
              as="h1"
              fontWeight="black"
              letterSpacing="wide"
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            >
              {props.title}
            </Heading>
          </Stack>
        </Container>
      </Box>
      {props.children}
      <DetailsList />
    </Stack>
  );
};

export default InformationLayout;
