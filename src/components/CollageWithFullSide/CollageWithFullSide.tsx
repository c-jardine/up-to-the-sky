import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CollageWithFullSideProps {
  card: {
    heading: string;
    content: string | React.ReactNode;
  };
  image: {
    src: string | StaticImageData;
    alt: string;
  };
}

const CollageWithFullSide = (props: CollageWithFullSideProps) => {
  const { card, image } = props;
  return (
    <Box position="relative" overflow={{ lg: 'hidden' }}>
      <SimpleGrid columns={2} h="sm" display={{ base: 'none', lg: 'grid' }}>
        <Box bg="primary.500" />
        <Box bg="white" />
      </SimpleGrid>
      <Box
        display={{ base: 'none', lg: 'grid' }}
        position="absolute"
        top={0}
        left="50%"
        h="sm"
        w="sm"
        bg="primary.500"
      />
      <SimpleGrid
        mt={{ lg: -72 }}
        position="relative"
        columns={{ base: 1, lg: 2 }}
        mx="auto"
        maxW="6xl"
        w="full"
      >
        <Stack
          spacing={4}
          px={{ base: 4, lg: 12 }}
          py={12}
          shadow={{ lg: '2xl' }}
          bg="white"
          h="max"
          mt={{ lg: 16 }}
          zIndex={1}
        >
          <Heading as="h2">{card.heading}</Heading>
          {card.content}
        </Stack>
        <Box
          position="relative"
          ml={{ lg: -16 }}
          minH={{ base: 96, md: 'container.sm' }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            placeholder="blur"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CollageWithFullSide;
