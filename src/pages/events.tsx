import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import Image from 'next/image';
import headerImg from '../../public/images/banquet-fundraiser-dinner.jpg';
import { EventsList } from '../components/EventsList';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const EventsPage = () => {
  return (
    <Box pb={24}>
      <Box position="relative" maxW="1920px" w="full" h={72}>
        <Image
          src={headerImg}
          alt="A banquet dinner at an event featuring several tables."
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
      </Box>
      <Container
        position="relative"
        maxW="8xl"
        w="full"
        mt={{ base: -16, md: -28 }}
      >
        <Stack
          bg="white"
          px={{ base: 4, sm: 8, md: 20 }}
          py={{ base: 4, md: 12 }}
          shadow="dark-lg"
        >
          <Text
            className={spectral.className}
            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
            fontWeight="bold"
            fontStyle="italic"
            color="primary.500"
          >
            Make a difference
          </Text>
          <Heading
            as="h1"
            fontWeight="black"
            letterSpacing="wide"
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          >
            Fundraising Events
          </Heading>
        </Stack>
      </Container>
      <EventsList />
    </Box>
  );
};

export default EventsPage;
