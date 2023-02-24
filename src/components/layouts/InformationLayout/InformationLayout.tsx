import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import React from 'react';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

interface InformationalLayoutProps {
  smallTitle: string;
  title: string;
  children: React.ReactNode;
}

const InformationLayout = (props: InformationalLayoutProps) => {
  return (
    <Stack spacing={28} alignItems="center" mb={24}>
      <Box w="full">
        <Box w="full" h={40} bg="primary.400" />
        <Container
          maxW="8xl"
          w="full"
          mt={-28}
          px={{ base: 4, sm: 8, md: 20 }}
          py={12}
          bg="white"
          shadow="lg"
        >
          <Stack>
            <Text
              className={spectral.className}
              fontSize="xl"
              fontWeight="bold"
              fontStyle="italic"
              color="primary.500"
            >
              {props.smallTitle}
            </Text>
            <Heading as="h1" fontWeight="black" letterSpacing="wide">
              {props.title}
            </Heading>
          </Stack>
        </Container>
      </Box>
      {props.children}
    </Stack>
  );
};

export default InformationLayout;
