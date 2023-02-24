import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image as ChakraImage,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import Image from 'next/image';
import NextLink from 'next/link';
import hero from '../../public/images/home-hero.jpg';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Home = () => {
  return (
    <Stack w="full" spacing={28} mb={16} pt={{ base: 0, md: 32 }}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        position="relative"
        h={{ md: 'container.sm' }}
        alignItems={{ md: 'center' }}
        maxW="6xl"
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
            <Button variant="primary" flexBasis="50%">
              Learn more
            </Button>
            <Button variant="secondary" flexBasis="50%">
              Donate
            </Button>
          </HStack>
        </Box>
        <Box
          position={{ base: 'relative', md: 'absolute' }}
          h={{ base: 64, md: 'container.sm' }}
          w={{ base: 'full', md: '4xl' }}
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
            // pt={{ lg: 12 }}
            py={12}
            shadow="2xl"
            bg="white"
            h="max"
            mt={{ lg: 16 }}
            // ml={8}
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

      <Box px={{ base: 4, xl: 0 }} maxW="6xl" w="full" alignSelf="center">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          shadow="2xl"
          borderWidth={{ base: 6, md: 12 }}
          borderColor="primary.500"
          px={{ base: 4, md: 12 }}
          py={12}
          gap={16}
        >
          <Stack>
            <Heading
              as="h2"
              fontSize="lg"
              color="primary.500"
              textTransform="uppercase"
            >
              Donate Now
            </Heading>
            <Heading as="h3" pt={4} fontSize="2xl" fontWeight="semibold">
              Your gift is so very appreciated
            </Heading>
            <Stack maxW="container.md" mx="auto">
              <Text>
                Kristin&apos;s Endowment Fund at the Atrium Medical Center
                Foundation will provide funding for care and program assistance
                for neurology patients with brain tumors, as well as provide
                scholarships to nursing students at Ohio University with
                preference being given (when possible) to a Badin High School
                graduate.
              </Text>
              <Text color="primary.500" fontWeight="semibold">
                No act of generosity is too small to make a difference.
              </Text>
              <Text pt={4}>
                Thank you for helping us keep Kristin&apos;s legacy alive.
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text>How much would you like to donate?</Text>
            <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
              <Button variant="secondary">$50</Button>
              <Button variant="secondary">$100</Button>
              <Button variant="secondary">$250</Button>
              <Button variant="secondary">$500</Button>
              <Button variant="secondary">$1,000</Button>
              <Button variant="secondary">$2,500</Button>
            </SimpleGrid>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.400">
                $
              </InputLeftElement>
              <Input placeholder="Other amount" inputMode="numeric" />
            </InputGroup>
            <Button variant="secondary" disabled w="full">
              Donate
            </Button>
          </Stack>
        </SimpleGrid>
      </Box>

      <Stack alignItems="center" textAlign="center" px={{ base: 4, sm: 0 }}>
        <Heading
          as="h2"
          fontWeight="semibold"
          fontSize="xl"
          letterSpacing="wide"
        >
          If preferred, checks can be sent to:
        </Heading>
        <Text>Atrium Medical Center Foundation</Text>
        <Text>Attn: Kristin Renee Cantrell Hill Memorial Endowment</Text>
        <Text>One Medical Center Drive</Text>
        <Text>Middletown, OH 45005</Text>
      </Stack>
    </Stack>
  );
};

export default Home;
