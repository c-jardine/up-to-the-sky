import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Download, ExternalLink } from 'lucide-react';
import { Logo } from '../Logo';

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

        <Heading as="h3" fontSize="2xl" textAlign="center" pt={8}>
          In-kind donations
        </Heading>
        <Text>
          Download the form below to make an in-kind donation to the Kristin
          Renee Cantrell Hill Endowment Fund.
        </Text>
        <Stack
          pt={4}
          justifyContent="center"
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            variant="secondary"
            as={Link}
            href="/in-kind-donation-form.pdf"
            target="_blank"
            rel="noreferrer"
            w={{ base: 'full', sm: 'max' }}
          >
            Download form <Icon as={Download} ml={2} />
          </Button>
        </Stack>

        <Heading as="h3" textAlign="center" pt={8}>
          Tournament Sponsors
        </Heading>
        <Text>
          We&apos;d like to thank our tournament sponsors for helping put on
          this event. Please consider giving them your business!
        </Text>
        <SimpleGrid
          gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr',
          }}
          justifyContent="center"
          spacing={{ base: 8, sm: 16 }}
        >
          <Logo
            name="AE Door & Window Co."
            href="https://www.aedoorsales.com"
            src="/images/ae-door-and-window-co.png"
            gridColumn={{ md: '1 / span 2' }}
          />
          <Logo
            name="Little Miami Outfitters"
            href="https://www.littlemiamioutfitters.com"
            src="/images/little-miami-outfitters.webp"
            gridColumn={{ md: '3 / span 2' }}
          />
          <Logo
            name="Holmes Agency, Inc."
            src="/images/holmes-agency-inc.png"
            gridColumn={{ md: '1 / span 2' }}
          />
          <Logo
            name="Renewal by A-One Cleaners"
            src="/images/renewal-by-a-one-cleaners.png"
            gridColumn={{ md: '3 / span 2' }}
          />
          <Logo
            name="Crusa Construction & Restoration Solutions"
            href="https://www.crusa.com"
            src="/images/crusa-construction.png"
            gridColumn={{ sm: '1 / span 2', md: '1 / span 4' }}
          />
          <Logo
            name="Ever-Roll"
            href="https://www.ever-roll.com"
            src="/images/ever-roll.png"
            gridColumn={{ sm: '1 / span 2', md: '1 / span 4' }}
          />
        </SimpleGrid>
      </Container>
    </Container>
  );
}
