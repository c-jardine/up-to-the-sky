import {
  chakra,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { Clock, MapPin } from 'lucide-react';
import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { TypedObject } from 'sanity';
import headerImg from '../../public/images/banquet-fundraiser-dinner.jpg';
import { sanity } from '../studio/client';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

interface EventProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'event';
  _updatedAt: string;
  date: string;
  description: TypedObject | TypedObject[];
  location: {
    name: string;
    address: string;
  };
  name: string;
}

interface EventsPageProps {
  events: EventProps[];
}

const EventsPage = (props: EventsPageProps) => {
  const { events } = props;
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
      <Container maxW="4xl" w="full" pt={20}>
        {events.length ? (
          events.map((event) => {
            const [month, day, year, hour, minute, timeOfDay] = format(
              new Date(event.date),
              'MMMM d yyyy h mm a'
            ).split(' ');

            const locationName = event.location.name
              ? `${event.location.name}, `
              : '';
            const { address } = event.location;
            const urlEncodedLocation = encodeURIComponent(
              `${locationName}${address}`
            );
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${urlEncodedLocation}`;
            return (
              <SimpleGrid
                key={event._id}
                templateColumns={{ base: '1fr', lg: '1fr auto' }}
                gap={8}
              >
                <Box display={{ base: 'none', lg: 'block' }}>
                  <Stack
                    rounded="sm"
                    px={6}
                    py={4}
                    bg="secondary.500"
                    h="max"
                    fontSize="sm"
                    lineHeight={1}
                    alignItems="center"
                    color="secondary.200"
                  >
                    <Text fontSize="4xl" fontWeight="black" color="white">
                      {day}
                    </Text>
                    <Stack alignItems="center" spacing={1}>
                      <Text>{month}</Text>
                      <Text>{year}</Text>
                    </Stack>
                  </Stack>
                  <HStack
                    bg="secondary.200"
                    px={4}
                    py={2}
                    alignItems="center"
                    color="secondary.600"
                  >
                    <Icon as={Clock} />
                    <Text fontSize="sm" whiteSpace="nowrap">
                      {hour}:{minute} {timeOfDay}
                    </Text>
                  </HStack>
                </Box>
                <Stack>
                  <Heading
                    as="h2"
                    fontFamily={spectral.style.fontFamily}
                    color="primary.500"
                  >
                    {event.name}
                  </Heading>
                  <SimpleGrid
                    templateColumns="auto 1fr"
                    gap={2}
                    color="blackAlpha.600"
                  >
                    <Icon as={MapPin} mt={1} />
                    <Link
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      transition="200ms ease-in-out"
                      _hover={{
                        color: 'blackAlpha.800',
                      }}
                    >
                      <chakra.span display="block">
                        {event.location.name}
                      </chakra.span>
                      <chakra.span display="block">
                        {event.location.address}
                      </chakra.span>
                    </Link>
                  </SimpleGrid>
                  <SimpleGrid
                    display={{ base: 'grid', lg: 'none' }}
                    templateColumns="auto 1fr"
                    alignItems="center"
                    gap={2}
                    color="blackAlpha.600"
                  >
                    <Icon as={Clock} />
                    <Text>
                      {month} {day}, {year} at {hour}:{minute} {timeOfDay}
                    </Text>
                  </SimpleGrid>
                  <Divider />
                  <PortableText value={event.description} />
                </Stack>
              </SimpleGrid>
            );
          })
        ) : (
          <Stack>
            <Heading as="h2">No upcoming events</Heading>
            <Text>
              If you&apos;d like to make a donation online or through the mail,
              please click{' '}
              <Link
                fontWeight="semibold"
                color="secondary.400"
                transition="200ms ease-in-out"
                _hover={{ color: 'secondary.600' }}
              >
                here
              </Link>{' '}
              for more information.
            </Text>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const events: EventProps = await sanity.fetch(groq`*[_type == 'event']`);

  return {
    props: { events },
  };
};
export default EventsPage;
