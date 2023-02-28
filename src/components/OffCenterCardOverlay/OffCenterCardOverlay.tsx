import { Box, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

interface OffCenterCardOverlayProps {
  card: {
    heading: string;
    content: React.ReactNode;
  };
  image: {
    src: string | StaticImageData;
    alt: string;
  };
}

const OffCenterCardOverlay = (props: OffCenterCardOverlayProps) => {
  const { card, image } = props;
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      position="relative"
      h={{ md: 'container.sm' }}
      alignItems={{ md: 'center' }}
      maxW="container.xl"
      w="full"
      mx="auto"
      spacing={0}
    >
      <Box
        w={{ md: 'xl' }}
        pt={16}
        h="max"
        bg="white"
        px={{ base: 4, md: 12 }}
        py={12}
        position="relative"
        zIndex={1}
        borderBottomWidth={8}
        borderColor="primary.500"
        shadow="2xl"
      >
        {/* <Box position="relative" h={32}>
          <Image
            src={logo}
            alt='A butterfly with a grey cancer ribbon for a body, featuring the text "Up to the Sky"'
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
          />
        </Box> */}
        <Text className={spectral.className} fontSize="4xl" mt={8}>
          {card.heading}
        </Text>
        {card.content}
      </Box>
      <Box
        position={{ base: 'relative', md: 'absolute' }}
        h={{ base: 64, md: 'container.sm' }}
        w={{ md: 'calc(100% - 250px)' }}
        left={{ md: '250px' }}
        top={{ md: 0 }}
        shadow="2xl"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          priority
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
      </Box>
    </Stack>
  );
};

export default OffCenterCardOverlay;
