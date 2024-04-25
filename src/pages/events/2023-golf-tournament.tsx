import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
// import { Spectral } from '@next/font/google';
import { ExternalLink } from 'lucide-react';
import { NextSeo } from 'next-seo';

// const spectral = Spectral({
//   weight: '500',
//   subsets: ['latin'],
//   display: 'swap',
// });

function Logo({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <Stack as={Link} href={href} target="_blank" rel="noreferrer" role="group">
      <Box position="relative" w="fit-content" mx="auto">
        <Image src={src} alt={`${name} logo`} maxH={32} objectFit="contain" />
      </Box>
      <Text
        fontWeight="semibold"
        textAlign="center"
        transition="200ms ease-in-out"
        _groupHover={{ color: 'primary.500' }}
      >
        {name}
      </Text>
    </Stack>
  );
}

export default function GolfTournament2023Page() {
  // const googleMapsUrl =
  //   'https://www.google.com/maps/search/?api=1&query=Fairfield%20Greens%20Golf%20Course%2C%202200%20John%20Gray%20Rd%2C%20Fairfield%2C%20OH%2045014';
  return (
    <>
      <NextSeo
        title="2023 Golf Tournament Fundraiser"
        description="Our 2023 golf tournament was a huge success that benefitted the Kristin Renee Cantrell Hill Memorial Endowment Fund at the Atrium Health Foundation."
        canonical="https://www.uptothesky.org/events/2023-golf-tournament"
      />

      <Container as={Stack} gap={16} maxW="container.xl" mb={24} w="full">
        <Box position="relative" mx="auto">
          <Image
            src="/images/2023-golf-tournament-banner.png"
            alt="2023 Golf Tournament. Saturday, October 7, 2023 from 11AM to 7PM at Fairfield Golf Course in Fairfield, OH."
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 5 }} gap={8}>
          <Stack gridColumn={{ md: '1 / span 3' }}>
            <Heading as="h1">2023 Golf Tournament</Heading>
            <Text>
              Our 2023 Golf for Kristin event was a huge success! With 80
              golfers, we raised over{' '}
              <chakra.span fontWeight="bold" color="secondary.500">
                $23,000
              </chakra.span>{' '}
              for the Kristin Cantrell Endowment Fund!
            </Text>
            <Text>
              We want to extend a huge thank you to all of our sponsors, the
              Fairfield Golf Course, Atrium Medical Center, all of our
              volunteers, all of the golfers, and everyone who donated to make
              this day possible.
            </Text>
            <Heading as="h2" pt={8}>
              Missed this event?
            </Heading>
            <Text>
              We would love to have you join us for our next tournament. Click
              the link below for more information.
            </Text>
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
          </Stack>
          <Image
            gridColumn={{ md: '4 / span 2' }}
            gridRow={1}
            src="/images/2023-fundraising-goal.png"
          />
        </SimpleGrid>

        <Image
          src="/images/2023-golf-tournament-photo-1.jpg"
          alt="Group photo with people holding an Up to the Sky banner"
          // h={"32rem"}
          h={{ base: '16rem', sm: '32rem' }}
          border="0.5rem solid"
          borderColor="primary.500"
          objectFit="cover"
          objectPosition="center"
        />

        <Stack gap={8}>
          <Stack maxW="container.md" alignSelf="center">
            <Heading as="h2" textAlign="center">
              Tournament Sponsors
            </Heading>
            <Text textAlign="center">
              Our golf tournament wouldn&apos;t have been such a success without
              the support of our sponsors. Please consider giving them your
              business!
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4} alignItems="center">
            <Logo
              name="AE Door & Window Co."
              src="/images/ae-door-and-window-co.png"
              href="https://www.aedoorsales.com"
            />
            <Logo
              name="CRUSA Construction & Restoration Solutions"
              src="/images/crusa-construction-and-restoration-solutions.webp"
              href="https://www.crusa.com"
            />
            <Logo
              name="Honorable Order of the Blue Goose International"
              src="/images/honorable-order-of-the-blue-goose-international.png"
              href="https://www.bluegoose.org"
            />
            <Logo
              name="Flub's Ice Cream"
              src="/images/flubs-ice-cream.jpg"
              href="https://www.flubsicecream.com"
            />
            <Logo
              name="Little Miami Outfitters"
              src="/images/little-miami-outfitters.webp"
              href="https://www.littlemiamioutfitters.com"
            />
          </SimpleGrid>
        </Stack>

        <Stack gap={8}>
          <Stack maxW="container.md" alignSelf="center">
            <Heading as="h2" textAlign="center">
              Raffles
            </Heading>
            <Text textAlign="center">
              In addition to the golf tournament, we also raised money through
              raffles. Check out some of what was up for grabs!
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 5 }} gap={8}>
            <Stack gridColumn={{ md: '1 / span 3' }}>
              <Heading as="h3">Chest of Cheer</Heading>
              <Text>
                We gave away the mother of all liquor chests. The included items
                were:
              </Text>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                fontSize="sm"
                gap={2}
              >
                <Text>1800 Silver Tequila</Text>
                <Text>Absolute Citron</Text>
                <Text>Bacardi Rum</Text>
                <Text>Bulleit Bourbon</Text>
                <Text>Captain Morgan Spiced Rum</Text>
                <Text>Crown Royal Original</Text>
                <Text>Crown Royal Peach</Text>
                <Text>Di Saronno Amaretto</Text>
                <Text>Fireball Cinnamon Whiskey</Text>
                <Text>Goldschläger</Text>
                <Text>Jägermeister</Text>
                <Text>Jameson Irish Whiskey</Text>
                <Text>Jose Cuervo Gold Tequila</Text>
                <Text>Makers Mark Whiskey</Text>
                <Text>Malibu Rum</Text>
                <Text>Ole Smokey Salted Caramel Moonshine</Text>
                <Text>Rumchata</Text>
                <Text>Skrewball Peanut Butter Whiskey</Text>
                <Text>Tanqueray Gin</Text>
                <Text>Three Olives Cherry Vodka</Text>
                <Text>Titos Vodka</Text>
              </SimpleGrid>
            </Stack>
            <Image
              gridColumn={{ md: '4 / span 2' }}
              gridRow={1}
              src="/images/2023-fundraising-liquor.jpg"
              alt="A table full of various liquor bottles."
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 5 }} gap={8}>
            <Image
              gridColumn={{ md: '1 / span 2' }}
              gridRow={1}
              src="/images/2023-fundraising-gatlinburg-chalet.jpg"
              alt="A table full of various liquor bottles."
            />
            <Stack gridColumn={{ md: '3 / span 3' }}>
              <Heading as="h3">Gatlinburg Chalet</Heading>
              <Text>Valued at $1,500!</Text>
              <Text>
                The winner of this item got to choose between two chalets for a{' '}
                <chakra.span fontWeight="bold" color="secondary.500">
                  5 Days/4 Nights stay for up to 6 people
                </chakra.span>
                !
              </Text>
              <Text>
                A huge thank you to Bryan Pence for donating this beautiful
                vacation!
              </Text>
              <Box pt={4}>
                <Button
                  variant="primary"
                  as={Link}
                  href="https://smokymtndreams.com/"
                  target="_blank"
                  rel="noreferrer"
                  w={{ base: 'full', sm: 'max' }}
                >
                  Smoky Mountain Dreams <Icon as={ExternalLink} ml={2} />
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
