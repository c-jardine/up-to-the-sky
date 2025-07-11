import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Download, ExternalLink } from 'lucide-react';

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
          src="/images/2025-golf-tournament-banner.jpg"
          alt="2024 Golf Tournament. Sunday, September 21, 2025 at 1:30 PM at Fairfield Golf Course in Fairfield, OH."
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Container as={Stack} py={8} maxW="4xl" w="full">
        <Heading as="h2" textAlign="center">
          Golf for Kristin
        </Heading>
        <Text>
          Join us in a golf outing in Kristin&apos;s memory on September 21,
          2025 at 1:30 PM. All proceeds will go to the Atrium Medical Center
          Foundation, benefitting Kristin&apos;s Endowment Fund.
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
            href="https://e.givesmart.com/events/FzS/?isOrderFormActive=true"
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

        <Image
          src="/images/tournament-sponsors.jpg"
          alt="Golf Tournament Sunday, September 21, 2025."
        />

        {/* <Heading as="h3" textAlign="center" pt={8}>
          Tournament Sponsors
        </Heading>
        <Text>
          We&apos;d like to thank our tournament sponsors for helping put on
          this event. Please consider giving them your business!
        </Text>
        <Logo
          name="AE Door & Window Co."
          href="https://www.aedoorsales.com"
          src="/images/ae-door-and-window-co.png"
        /> */}
        {/* <Heading as="h4" textAlign="center" fontSize="2xl" pt={8}>
          Dinner Sponsor
        </Heading>
        <NoImgLogo>Julie Conrad, Caroline Palmer, and</NoImgLogo>
        <Logo name="City Barbecue" src="/images/city-bbq-logo.jpg" />
        <Heading as="h4" textAlign="center" fontSize="2xl" pt={8}>
          Beverage Cart Sponsors
        </Heading>
        <SimpleGrid
          gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: 8, sm: 16 }}
        >
          <Logo
            name="Holmes Agency, Inc."
            href="https://agents.farmers.com/oh/monroe/john-holmes"
            src="/images/holmes-agency-inc.png"
          />
          <Logo
            name="Honorable Order of the Blue Goose"
            href="https://bluegoose.org"
            src="/images/honorable-order-of-the-blue-goose-international.png"
          />
          <Logo
            name="Renewal by A-One Cleaners"
            href="https://renewalclaimsolutions.com/locations/renewal-a-one-cleaners/"
            src="/images/renewal-by-a-one-cleaners.png"
          />
          <Logo name="Nationwide" src="/images/nationwide-logo.png" />
          <Logo
            name="Mid-Miami Roofing, Inc."
            href="https://mid-miamiroofing.com"
            src="/images/mid-miami-roofing-logo.webp"
          />
          <Logo
            name="West Chester Autobody"
            href="https://westchesterautobody.com"
            src="/images/west-chester-autobody.png"
            imgContainerProps={{
              rounded: '2xl',
              overflow: 'hidden',
            }}
          />
          <Logo
            name="Ever-Roll"
            href="https://www.ever-roll.com"
            src="/images/ever-roll.png"
            containerProps={{
              gridColumn: {
                sm: '1 / span 2',
                md: '1 / span 3',
              },
            }}
          />
        </SimpleGrid>

        <Heading as="h4" textAlign="center" fontSize="2xl" pt={8}>
          Birdie Sponsors
        </Heading>
        <SimpleGrid
          gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          }}
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <NoImgLogo>Little Miami Outfitters</NoImgLogo>
          <NoImgLogo>CRUSA Construction & Restoration Solutions</NoImgLogo>
          <NoImgLogo>Flub&apos;s Ice Cream</NoImgLogo>
          <NoImgLogo>Ahavo Coffee House</NoImgLogo>
          <NoImgLogo>Hoernemann & Associates Insurance Agency</NoImgLogo>
          <NoImgLogo>
            The Cantrell Family - In Memory of Our Beautiful Kristin
          </NoImgLogo>
          <NoImgLogo>Interstate Insurance Services Agency</NoImgLogo>
          <NoImgLogo>Timber & Twine</NoImgLogo>
        </SimpleGrid>

        <Heading as="h4" textAlign="center" fontSize="2xl" pt={8}>
          Tee Sponsors
        </Heading>
        <SimpleGrid
          gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          }}
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <NoImgLogo>Badin High School</NoImgLogo>
          <NoImgLogo>Gump Check, LLC.</NoImgLogo>
          <NoImgLogo>Hoernemann & Associates Insurance Agency</NoImgLogo>
          <NoImgLogo>Kevin Harlan - President, Atrium Medical Center</NoImgLogo>
          <NoImgLogo>Rightwealth Advisors</NoImgLogo>
          <NoImgLogo>Miami Valley Gaming</NoImgLogo>
          <NoImgLogo>
            Firefighter&apos;s & Company Federal Credit Union
          </NoImgLogo>
          <NoImgLogo>Mike & Anjanette Stautberg</NoImgLogo>
          <NoImgLogo>Numprik Thai Lao</NoImgLogo>
          <NoImgLogo>Nat&apos;s Cookie Crumbles</NoImgLogo>
          <NoImgLogo>St. Rita Class of 1964</NoImgLogo>
          <NoImgLogo>The Garver Insurance Agency</NoImgLogo>
        </SimpleGrid> */}
      </Container>
    </Container>
  );
}
