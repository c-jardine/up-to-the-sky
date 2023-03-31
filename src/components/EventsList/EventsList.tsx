import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import { EventProps } from '../../types';
import { urlForImage } from '../../utils';

const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

interface EventsListProps {
  events: EventProps[];
}

const EventsList = (props: EventsListProps) => {
  const { events } = props;

  if (!events) {
    return (
      <Stack alignItems="center" w="full" pt={20}>
        <Spinner color="primary.500" size="xl" />
      </Stack>
    );
  }

  return (
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
              templateColumns={{ base: '1fr', md: 'auto 1fr' }}
              gap={8}
            >
              {event.bannerMobile ? (
                <Link
                  href={event.eventPage.href}
                  target="_blank"
                  gridColumn={{ base: '1', md: '1 / span 2' }}
                >
                  <Box
                    display={{ base: 'block', md: 'none' }}
                    position="relative"
                  >
                    <Image
                      src={urlForImage(event.bannerMobile).url()}
                      alt={`Banner for ${event.name}`}
                    />
                  </Box>
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    position="relative"
                    gridColumn={{ base: '1', md: '1 / span 2' }}
                  >
                    <Image
                      src={urlForImage(event.bannerDesktop).url()}
                      alt={`Banner for ${event.name}`}
                    />
                  </Box>
                </Link>
              ) : (
                <Box
                  position="relative"
                  gridColumn={{ base: '1', md: '1 / span 2' }}
                >
                  <Image
                    src={urlForImage(event.bannerDesktop).url()}
                    alt={`Banner for ${event.name}`}
                  />
                </Box>
              )}
              <Box display={{ base: 'none', md: 'block' }} maxW={36}>
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
                    rel="noreferrer"
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
                  display={{ base: 'grid', md: 'none' }}
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
                <Divider pt={2} />

                {event.eventPage && (
                  <Box py={4}>
                    <Button
                      variant="primary"
                      as={Link}
                      href={event.eventPage.href}
                      target="_blank"
                      rel="noreferrer"
                      w={{ base: 'full', sm: 'max' }}
                    >
                      {event.eventPage.label} <Icon as={ExternalLink} ml={2} />
                    </Button>
                  </Box>
                )}
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
              href="https://e.givesmart.com/events/sIm/"
              target="_blank"
              rel="noreferrer"
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
  );
};
export default EventsList;
