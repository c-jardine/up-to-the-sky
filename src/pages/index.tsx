import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import hero from '../../public/images/caring-hands-holding.jpg';
import kristin from '../../public/images/kristin-1.jpg';
import logo from '../../public/images/logo.png';
import { DonateBox } from '../components/DonateBox';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Home = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Kristin Renee Cantrell Hill Memorial Endowment Fund"
        description="Kristin's Endowment Fund provides funding for care and program assistance for neurology patients with brain tumors and scholarships to nursing students."
        canonical="https://www.uptothesky.org/"
      />
      <Stack w="full" spacing={{ base: 24, md: 36 }} mb={{ base: 24, md: 36 }}>
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
            <Box position="relative" h={32}>
              <Image
                src={logo}
                alt='A butterfly with a grey cancer ribbon for a body, featuring the text "Up to the Sky"'
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Box>
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
                rel="noreferrer"
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
            w={{ md: 'calc(100% - 250px)' }}
            left={{ md: '250px' }}
            top={{ md: 0 }}
            shadow="2xl"
          >
            <Image
              src={hero}
              alt="Two people embracing each other's hands."
              fill
              placeholder="blur"
              priority
              style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            />
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
              <Heading as="h2">Remembering Kristin</Heading>
              <Text>
                Kristin Renee Cantrell Hill was diagnosed with an inoperable
                brain tumor just after her 43rd birthday. She passed away just
                17 days after her diagnosis.
              </Text>
              <Text>
                Kristin was a loving daughter, sister, wife, and mother. A
                resident of Fairfield, Ohio, Kristin received her BSN from Ohio
                University and was a substance use treatment nurse at hospitals
                in the Greater Cincinnati region.
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
            <Box
              position="relative"
              ml={{ lg: -16 }}
              minH={{ base: 96, md: 'container.sm' }}
            >
              <Image
                src={kristin}
                alt="Kristin Renee Cantrell Hill"
                fill
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </SimpleGrid>
        </Box>

        <Box position="relative" bg="secondary.400" w="full" overflow="hidden">
          <chakra.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2638.38 2938.9"
            fill="whiteAlpha.100"
            maxH={{ base: 'md', lg: '2xl' }}
            h="full"
            w="full"
            position="absolute"
            bottom={-8}
            right={{ base: -40, sm: -64, lg: -96, xl: '-550px' }}
            transform="rotate(-25deg)"
          >
            <path d="m1324.34,2725.01c-44.78,43-83.46,89.81-131.1,124.24-215.25,155.58-506.6,103.21-661.22-114.77-8.77-12.37-22.38-23.88-36.29-29.63-182.11-75.32-295.65-244.38-294.15-442.41.18-23.77-5.3-38.44-25.81-53.38C.87,2081.63-48.54,1856.92,52.97,1664.37c5.61-10.65,5.37-29.16-.04-40.12-82.88-167.97-69-325.59,45.6-474.7,8.92-11.61,12.43-32.19,9.83-47.09-34.14-195.79,56.47-375.79,234.84-462.17,21.31-10.32,43.92-17.95,60.19-24.52,0-47.55-3.93-92.09.81-135.69,10.35-95.22,58.6-169.61,137.19-223.76,52.81-36.39,106.2-72.01,160.25-106.53,97.87-62.5,201.39-112.2,315.84-136.95,111.85-24.18,214.72-12.9,292.86,66.82,53.34-25.19,100.66-55.27,152.36-70.15,77.83-22.4,155.55-1.32,230.71,22.54,120.7,38.33,228.13,101.82,329.55,176.6,26.17,19.29,56.38,33.17,82.16,52.9,107.55,82.32,150,191,127.39,324.78-1.42,8.39-3.14,16.74-5.17,27.49,76.28,23.21,142.92,60.7,196.34,119.03,95.36,104.11,130.84,226.2,106.71,365.07-3.97,22.87-1.88,39.52,14.23,58.72,107.08,127.54,123.68,311.39,42.68,462.52-9.8,18.28-10.8,31.41-.6,50.21,101.22,186.71,50.12,412.86-121.77,538.74-19.28,14.12-27.98,27.39-27.67,52.53,2.42,199.84-109.89,367.36-295.07,444.87-12.2,5.11-24.98,13.86-32.47,24.46-194.17,274.85-576.93,279.24-775.17,8.42-3.83-5.24-7.86-10.33-10.2-13.4ZM162.99,1767.4c-.1.24-3.56,6.93-5.97,13.99-44.28,129.74,16.13,274.41,140.74,337.3,47.68,24.07,57.26,43.09,48.68,96.67-25.5,159.33,67.74,313.63,221.74,363.73,32.12,10.45,53.25,28.09,71.18,56.86,72.25,115.95,178.72,170.96,314.5,157.59,128.94-12.7,218.73-84.29,270.78-202.65,28.11-63.92,23.83-131.89,23.79-199.45-.26-503.33-.05-1006.66-.18-1510-.02-81.33-44.46-130.22-125.05-139.47-10.68-1.23-21.91-2.27-31.65-6.34-30.86-12.89-46.38-43.58-40.68-77.38,5.65-33.53,32.74-59.36,69.17-56.48,42.44,3.35,84.32,13.84,127.74,21.46,0-119.92,1.71-241.88-.74-363.76-1.19-58.92-53.78-110.82-111.33-114.09-102.67-5.83-192.96,33.13-284.62,80.84,10.24,6.44,16.42,10.65,22.9,14.35,58.24,33.24,104.68,78,133.43,139.23,18.02,38.38,5.55,77.7-28.67,95.51-35.17,18.31-73.82,6.69-95.78-28.86-4.57-7.41-8.5-15.23-13.32-22.46-44.01-65.93-122.2-95.42-196.98-74.46-75.53,21.18-128.61,89.75-130.81,169-1.71,61.54,12.45,79.92,70.95,92.06,186.23,38.64,330.12,216.26,328.2,404.25-.31,29.82-10.05,53.04-36.83,67.64-52.19,28.45-101.23-6.9-105.79-74.96-7.71-115.1-65.18-198.2-170.41-242.73-105.72-44.74-206.86-27.13-292.15,49.3-84.18,75.44-114.09,173.02-80.92,281.69,16.94,55.48,8.71,91.72-32.96,132.81-77.75,76.67-98.65,173.31-64.87,277.19,33.79,103.9,108.93,165.36,215.17,188.36,18.99,4.11,39.14,2.56,58.49,5.41,37.46,5.52,62.83,36.4,61.29,72.88-1.51,35.75-30.52,65.65-67.46,66.7-22.72.64-46.91,1.94-68.08-4.66-63.7-19.85-126.23-43.43-193.5-67.06Zm2306.26-9.58c-12.1,7.77-21.97,14.46-32.16,20.62-67.77,40.93-141.02,62.62-220.45,61.03-38.15-.76-66.27-28.08-69.06-65-2.78-36.65,21.75-67.86,59.03-74.33,10.69-1.85,21.67-1.97,32.5-3.09,117.54-12.06,199.67-73.45,239.87-183.55,39.95-109.42,15.68-209.76-66.94-291.03-37.04-36.44-45.82-68.93-29.58-118.46,63.8-194.57-101.65-387.89-304.09-358.43-134.43,19.56-227.54,123.95-237.9,266.73-3.71,51.15-33.73,82.6-76.16,79.78-41.54-2.77-66.66-35.33-65.85-85.37,3.2-197.41,150.94-365.11,355.41-400.99,21.18-3.72,30.08-12.65,35.15-31.02,19.84-71.82,3.47-134.56-50.99-184.65-87.08-80.1-216.99-56.11-278.05,49.53-24.31,42.05-60.69,55.32-98.13,35.79-38.57-20.12-49.33-60.3-26.51-103.48,28.7-54.29,70.12-96.64,123.3-127.45,8.69-5.03,17.26-10.25,27.55-16.37-62.87-42.39-176.66-80.38-246.01-83.49-95.2-4.27-149.41,47.52-149.48,143.33-.11,168.9.01,337.79.13,506.69,0,10.45.87,20.91,1.21,28.53,42.43-8,82.36-18.84,122.91-22.24,41.88-3.52,72.15,26.42,74.58,65.71,2.41,39.01-24.9,70.32-65.87,75.52-95.37,12.11-132.85,54.57-132.87,150.89-.07,326.9-.07,653.8-.09,980.69,0,15.9,0,31.8,0,47.78,5.86-.37,8.44.26,9.78-.75,6.93-5.25,13.45-11.02,20.27-16.42,53.6-42.42,112.36-74.98,179.49-89.96,38.34-8.55,73.79,13.82,83.47,50.03,9.24,34.56-9.49,71.21-43.82,84.96-9.05,3.63-18.69,5.77-27.9,9.03-140.27,49.7-226.41,177.77-220.81,328.18,5.13,137.86,106.17,262,243.16,298.77,139.99,37.58,288.09-20.91,364.17-147.06,18.84-31.25,42.05-48.9,76.14-60.51,155.36-52.9,245.19-208.2,216.35-369.65-7.22-40.43,6.19-65.49,41.89-86.45,27.05-15.88,54.8-32.11,77.77-53.08,84.78-77.41,111.25-217.54,58.58-310.76Z" />
            <path d="m683.62,1425.9c-23.31-7.96-47.08-14.97-70-24.1-157.41-62.67-266.83-224.46-262.81-386.55.79-31.78,13.99-54.94,42.46-67.48,25.87-11.39,54.7-9.53,72.67,11.44,14.22,16.59,23.95,41.51,25.7,63.53,6.48,81.27,37.23,149.43,99.55,202.03,106.02,89.48,257.01,88,362.33-2.56,5.77-4.96,11.11-10.43,16.83-15.45,31.63-27.77,72.21-27.72,99.75.05,28.28,28.51,27.66,72.09-2.01,102.25-55.59,56.51-122.11,94.35-199.4,111.42-23.76,5.25-35.54,14.45-43.11,39.19-39.39,128.89-164.46,221.5-295.67,222.25-46.58.27-78.16-26.72-79.54-67.95-1.38-41.42,27.44-70.21,74.3-74.2,81.38-6.93,138.7-47.63,158.95-113.86Z" />
            <path d="m1006.07,2463.97c3.11,81.45-22.33,115.3-67.78,116.1-39.62.7-69.27-26.44-71.41-69.17-3.07-61.44-18.62-118.14-56.38-167.51-52.69-68.88-122.65-106.24-209.06-111.78-53.25-3.41-83.89-28.04-84.79-70.52-.87-40.75,28.17-68.13,80.08-71.32,20.65-1.27,21.29-12.18,22.96-27.33,22.52-204.5,193.88-364,399.49-372.3,52.52-2.12,87.67,25.34,88.77,69.34,1.06,42.55-30.22,70.13-82.43,72.66-144.36,7.01-257.26,119.43-267.51,264.08-1.77,25,10.46,33.91,28.78,44.14,136.31,76.08,207.59,193.72,219.27,323.61Z" />
            <path d="m1852.13,1434.94c27.6,61.86,71.57,98.07,134.95,110.51,10.65,2.09,21.62,2.59,32.44,3.84,44.16,5.08,72.7,35.75,69.84,75.02-2.86,39.13-35.17,65.97-79.12,65.72-132.55-.75-256.88-92.41-296.39-221.61-7.48-24.46-18.71-33.95-42.86-39.26-75.04-16.49-140.09-52.96-194.86-107.12-33.1-32.72-36.61-74.82-9.06-104.53,29.83-32.18,69.88-31.35,106.86,2.21,158.5,143.88,400.9,81.53,460.79-119.14,7.06-23.66,9.46-49.03,11.43-73.82,3.84-48.35,32.96-78.9,75.46-76.68,41.15,2.16,67.79,34.03,67.39,80.65-1.51,178.88-127.94,342.75-304.03,394.12-10.17,2.97-20.25,6.23-32.83,10.11Z" />
            <path d="m2090.1,2147.13c11.38,0,18.91-.46,26.38.08,43.96,3.13,73.02,32.59,72.23,72.95-.75,38.68-29.59,67.82-72.15,69.17-54.79,1.73-105.68,15.42-150.91,46.14-76.86,52.21-119.64,124.6-124.96,218.25-2.66,46.9-19.29,72.77-51.47,81.95-47.18,13.45-91.46-19.23-90.52-70.01,2.95-160.18,74.79-282.04,212.79-361.81,33.31-19.26,38.95-39.15,33.42-72.57-23.01-138.84-127.34-233.1-268.42-240.61-49.02-2.61-79.17-31.02-78.07-73.56,1.08-41.83,33.99-69.34,82.43-68.9,198.52,1.8,379.51,163.21,403.96,360.23,1.47,11.82,3.22,23.59,5.3,38.7Z" />
          </chakra.svg>
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
              Learn more
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              color="secondary.800"
            >
              About glioblastoma
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
                  Glioblastoma refers to a cancerous brain tumor and is the most
                  aggressive form of brain cancer. The exact cause of
                  glioblastoma is unknown. There is no cure and treatment can be
                  extremely difficult. The typical duration of survival duration
                  after diagnosis in around one year, with only 5% of patients
                  surviving more than five years.
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
            mt={{ lg: -96 }}
          >
            <Text
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              color="primary.500"
            >
              Additional information
            </Text>
            <Text
              className={spectral.className}
              fontSize={{ base: '2xl', md: '3xl' }}
              mt={8}
            >
              Learn more about glioblastoma causes, symptoms, treatments, and
              more.
            </Text>
            <Button as="a" href="/glioblastoma" variant="secondary" mt={6}>
              Learn more <Icon as={ChevronRightIcon} boxSize={5} ml={2} />
            </Button>
          </Box>
          <Box
            position="relative"
            w="full"
            minH="xl"
            mt={{ lg: -80 }}
            ml={{ lg: -72 }}
          >
            <Image
              src="/images/brain-slice.jpg"
              alt="A cross-section of a brain."
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Container>

        <DonateBox />
      </Stack>
    </>
  );
};

export default Home;
