import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <Container
      maxW="container.lg"
      p={0}
      mb={8}
      w="full"
      border="0.5rem solid"
      borderColor="primary.500"
    >
      <Box
        as={Link}
        href="https://golfforkristin.givesmart.com/"
        target="_blank"
        rel="noreferrer"
        display="block"
        position="relative"
        mx="auto"
        borderBottom="0.5rem solid"
        borderColor="primary.500"
      >
        <Image
          src="/images/2024-golf-tournament-banner.jpeg"
          alt="2024 Golf Tournament. Sunday, September 22, 2024 from 1PM to 7PM at Fairfield Golf Course in Fairfield, OH."
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Container as={Stack} py={8} maxW="4xl" w="full">
        <Heading as="h2" textAlign="center">
          Golf for Kristin
        </Heading>
        <Text>
          Join us in a golf outing in Kristin&apos;s memory on September 22,
          2024 from 1:00 PM to 7:00 PM. All proceeds will go to the Atrium
          Medical Center Foundation, benefitting Kristin&apos;s Endowment Fund.
        </Text>
        <Stack
          pt={4}
          justifyContent="center"
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            variant="primary"
            as={Link}
            href="https://golfforkristin.givesmart.com/"
            target="_blank"
            rel="noreferrer"
            w={{ base: 'full', sm: 'max' }}
          >
            View event <Icon as={ExternalLink} ml={2} />
          </Button>
          <Button
            variant="secondary"
            as={Link}
            href="https://e.givesmart.com/events/AKy/?isOrderFormActive=true"
            target="_blank"
            rel="noreferrer"
            w={{ base: 'full', sm: 'max' }}
          >
            Register <Icon as={ExternalLink} ml={2} />
          </Button>
        </Stack>

        <Heading as="h2" textAlign="center" pt={8}>
          Tournament Sponsors
        </Heading>
        <Text>
          We&apos;d like to thank our tournament sponsors for helping put on
          this event. Please consider giving them your business!
        </Text>
        <Flex justifyContent="center">
          <Stack
            as={Link}
            href="https://www.aedoorsales.com"
            target="_blank"
            rel="noreferrer"
            role="group"
          >
            <Box position="relative" w="fit-content" mx="auto">
              <Image
                src="/images/ae-door-and-window-co.png"
                alt="AE Door & Window Co. logo"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Text
              fontWeight="semibold"
              transition="200ms ease-in-out"
              _groupHover={{ color: 'primary.500' }}
            >
              AE Door & Window Co.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Container>
  );
}
