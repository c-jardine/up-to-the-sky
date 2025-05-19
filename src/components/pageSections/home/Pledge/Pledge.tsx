import { Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { EmblaOptionsType } from 'embla-carousel';
import { Spectral } from 'next/font/google';
import EmblaCarousel from '../../../EmblaCarousel/EmblaCarousel';

const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const OPTIONS: EmblaOptionsType = { loop: true };

const Pledge = () => {
  return (
    <Stack
      borderY="8px solid"
      borderColor="primary.500"
      w="full"
      alignItems="center"
      py={16}
    >
      <SimpleGrid columns={{ xl: 5 }} maxW="container.xl" gap={16}>
        <Stack gridColumn={{ xl: '1 / span 3' }} px={4}>
          <Text
            fontFamily={spectral.style.fontFamily}
            fontSize="xl"
            fontStyle="italic"
            fontWeight="semibold"
            color="secondary.500"
          >
            A gift of hope
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            color="secondary.800"
          >
            Our $50,000 Pledge
          </Heading>
          {/* <Heading fontFamily={spectral.style.fontFamily} as="h2"></Heading> */}
          <Text fontWeight="bold">
            Thanks to your generous support, we&apos;ve pledged $50,000 to
            Atrium Medical Center in memory of Kristin.
          </Text>
          <Text>
            This contribution helped expand the Premier Blood and Cancer Center,
            including its infusion center. The newly renovated space now
            features 15 exam rooms, 18 infusion chairs, a lab, and a dedicated
            nutrition clinic.
          </Text>
          <Text>
            As part of this transformation, Kristin&apos;s legacy will continue
            to live on through the Kristin Renee Cantrell Hill Welcome Center.
          </Text>
          <Stack
            borderLeftWidth={8}
            borderColor="primary.500"
            p={4}
            maxW="container.sm"
          >
            <Text
              className={spectral.className}
              fontSize="2xl"
              fontStyle="italic"
              color="secondary.500"
            >
              Knowing that Kristin&apos;s name is helping others in their fight
              means everything to us.
            </Text>
            <Text
              as="cite"
              fontSize="lg"
              fontWeight="semibold"
              fontStyle="normal"
              color="blackAlpha.700"
            >
              Ron Cantrell - &quot;Daddy&quot;
            </Text>
          </Stack>
        </Stack>
        <EmblaCarousel
          slides={[
            <Image
              key={0}
              src="/images/atrium-welcome-center.jpg"
              alt="Welcome Center"
            />,
            <Image
              key={1}
              src="/images/atrium-welcome-center-family.png"
              alt="Welcome Center"
            />,
          ]}
          options={OPTIONS}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default Pledge;
