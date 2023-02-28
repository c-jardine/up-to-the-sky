import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

interface FullWidthWithOverlayProps {
  subHeading: string;
  heading: string;
  content: string;
  card: {
    heading: string;
    content: string;
    button: {
      label: string;
      url: string;
    };
  };
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  overlay: React.ReactNode;
}

const FullWidthWithOverlay = (props: FullWidthWithOverlayProps) => {
  const { card, image } = props;
  return (
    <Box>
      <Box position="relative" bg="secondary.400" w="full" overflow="hidden">
        {props.overlay}
        <Container
          position="relative"
          pt={20}
          pb={{ base: 20, lg: 80 }}
          maxW="7xl"
          w="full"
        >
          <Text
            fontFamily={spectral.style.fontFamily}
            fontSize="xl"
            fontStyle="italic"
            fontWeight="semibold"
            color="white"
          >
            {props.subHeading}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            color="secondary.800"
          >
            {props.heading}
          </Heading>
          <SimpleGrid
            templateColumns={{ base: '1fr', md: 'auto 1fr' }}
            gap={8}
            mt={8}
            pl={{ md: 8, lg: 16 }}
            maxW="5xl"
          >
            <Box
              display={{ base: 'none', md: 'block' }}
              position="relative"
              minW={{ md: '3xs', lg: '2xs' }}
              h={12}
              borderLeftWidth={4}
              borderBottomWidth={4}
              borderColor="white"
            >
              <Icon
                as={ChevronRightIcon}
                color="white"
                position="absolute"
                bottom="-1.35rem"
                right={-4}
                boxSize={10}
              />
            </Box>
            <Box mt={6}>
              <Text
                className={spectral.className}
                fontSize={{ base: '2xl', md: '3xl' }}
                color="secondary.800"
              >
                {props.content}
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container
        alignSelf="center"
        maxW="8xl"
        w="full"
        position="relative"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        px={0}
      >
        <Box
          position="relative"
          zIndex={1}
          maxW={{ lg: '2xl' }}
          w="full"
          h="max"
          bg="white"
          shadow={{ lg: '2xl' }}
          px={{ base: 4, lg: 12 }}
          py={12}
          mt={{ lg: -64 }}
        >
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            color="primary.500"
          >
            {card.heading}
          </Text>
          <Text
            className={spectral.className}
            fontSize={{ base: '2xl', md: '3xl' }}
            mt={8}
          >
            {card.content}
          </Text>
          <Button as="a" href={card.button.url} variant="secondary" mt={6}>
            {card.button.label}{' '}
            <Icon as={ChevronRightIcon} boxSize={5} ml={2} />
          </Button>
        </Box>
        <Box
          position="relative"
          w="full"
          minH="xl"
          mt={{ lg: -48 }}
          ml={{ lg: -72 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FullWidthWithOverlay;
