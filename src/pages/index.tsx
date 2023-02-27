import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image as ChakraImage,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import hero from '../../public/images/home-hero.jpg';
import { DonateBox } from '../components/DonateBox';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Home = () => {
  const router = useRouter();
  return (
    <Stack w="full" spacing={28} mb={20}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        position="relative"
        h={{ md: 'container.sm' }}
        alignItems={{ md: 'center' }}
        maxW="1920px"
        w="full"
        mx="auto"
        spacing={0}
        overflow="hidden"
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
          <ChakraImage
            src="/images/logo.png"
            alt='A butterfly with a grey cancer ribbon for a body, featuring the text "Up to the Sky"'
            position="relative"
            h="full"
            maxH={32}
          />
          <Text className={spectral.className} fontSize="4xl" mt={8}>
            In loving memory of Kristin Renee Cantrell Hill
          </Text>
          <Text
            color="primary.500"
            fontSize="lg"
            fontWeight="semibold"
            letterSpacing="wide"
            mt={4}
          >
            Donate to the Kristin Renee Cantrell Hill Memorial Endowment Fund
            today!
          </Text>
          <HStack mt={8}>
            <Button
              variant="primary"
              flexBasis="50%"
              onClick={() => void router.push('/glioblastoma')}
            >
              Learn more
            </Button>
            <Button
              as="a"
              href="https://e.givesmart.com/events/sIm/"
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
              flexBasis="50%"
            >
              Donate
            </Button>
          </HStack>
        </Box>
        <Box
          position={{ base: 'relative', md: 'absolute' }}
          h={{ base: 64, md: 'container.sm' }}
          w="full"
          left={{ md: '250px' }}
          top={{ md: 0 }}
          shadow="2xl"
        >
          <Image src={hero} alt="" fill style={{ objectFit: 'cover' }} />
        </Box>
      </Stack>

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
          px={{ base: 4, xl: 0 }}
        >
          <Stack
            spacing={4}
            px={{ base: 4, lg: 12 }}
            py={12}
            shadow="2xl"
            bg="white"
            h="max"
            mt={{ lg: 16 }}
            zIndex={1}
          >
            <Heading as="h2">Remembering Kristin</Heading>
            <Text>
              Kristin Renee Cantrell Hill was diagnosed with an inoperable brain
              tumor just after her 43rd birthday. She passed away just 17 days
              after her diagnosis.
            </Text>
            <Text>
              Kristin was a loving daughter, sister, wife, and mother. A
              resident of Fairfield, Ohio, Kristin received her BSN from Ohio
              University and was a substance use treatment nurse at hospitals in
              the Greater Cincinnati region.
            </Text>
            <Link
              as={NextLink}
              href="/obituary"
              fontWeight="semibold"
              color="primary.500"
              transition="200ms ease-in-out"
              _hover={{ textDecoration: 'none', filter: 'brightness(120%)' }}
            >
              Read Kristin&apos;s obituary{' '}
              <ChevronRightIcon mt={-1} boxSize={5} />
            </Link>
          </Stack>
          <Box ml={{ lg: -16 }}>
            <ChakraImage src="/images/kristin-1.jpg" />
          </Box>
        </SimpleGrid>
      </Box>

      <DonateBox />
    </Stack>
  );
};

export default Home;
