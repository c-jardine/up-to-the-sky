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
// import { Spectral } from 'next/font/google';
import { ExternalLink } from 'lucide-react';
import { NextSeo } from 'next-seo';

// const spectral = Spectral({
//   weight: '500',
//   subsets: ['latin'],
//   display: 'swap',
// });

export default function GolfTournament2024Page() {
  return (
    <>
      <NextSeo
        title="2024 Golf Tournament Fundraiser"
        description="Our 2024 golf tournament was a huge success that benefitted the Kristin Renee Cantrell Hill Memorial Endowment Fund at the Atrium Health Foundation."
        canonical="https://www.uptothesky.org/events/2024-golf-tournament"
      />

      <Container as={Stack} gap={16} maxW="container.xl" mb={24} w="full">
        <Box position="relative" mx="auto">
          <Image
            src="/images/2024-golf-tournament-banner.jpeg"
            alt="2024 Golf Tournament. Sunday, September 22, 2024 from 1PM to 7PM at Fairfield Golf Course in Fairfield, OH."
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 5 }} gap={8}>
          <Stack gridColumn={{ md: '1 / span 3' }}>
            <Heading as="h1">2024 Golf Tournament</Heading>
            <Text>
              Our 2024 Golf for Kristin event was a huge success! We raised over{' '}
              <chakra.span fontWeight="bold" color="secondary.500">
                $31,000
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
            alt="We raised over $31,000!"
            src="/images/2024-fundraising-goal.png"
          />
        </SimpleGrid>

        <Image
          src="/images/2024-golf-tournament-photo.jpg"
          alt="Group photo"
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
            <Stack alignItems="center">
              <Link href="https://www.aedoorsales.com" isExternal>
                <Image
                  src="/images/ae-door-and-window-co.png"
                  alt="AE Door and Window"
                  maxH={32}
                  objectFit="contain"
                />
              </Link>
            </Stack>
          </Stack>

          <Heading as="h3" textAlign="center">
            Dinner Sponsors
          </Heading>
          <Stack alignItems="center">
            <SimpleGrid
              columns={2}
              gap={4}
              alignItems="center"
              justifyItems="center"
            >
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Julie Conrad & Caroline Palmer
              </Text>
              <Link href="https://www.aedoorsales.com" isExternal>
                <Image
                  src="/images/city-bbq-logo.jpg"
                  alt="City Barbeque"
                  maxH={32}
                  objectFit="contain"
                />
              </Link>
            </SimpleGrid>
          </Stack>

          <Heading as="h3" textAlign="center">
            Beverage Cart Sponsors
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 3 }}
            gap={4}
            alignItems="center"
            justifyItems="center"
          >
            <Image
              src="/images/nationwide-logo.png"
              alt="Nationwide - The Fab Four"
              maxH={24}
              objectFit="contain"
            />
            <Link href="https://mid-miamiroofing.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad337948.jpg?v=2"
                alt="Mid-Miami Roofing, Inc."
                maxH={32}
                objectFit="contain"
              />
            </Link>
            <Link href="https://bluegoose.org" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad341805.jpg?v=2"
                alt="Order of the Blue Goose International"
                maxH={32}
                objectFit="contain"
              />
            </Link>

            <Image
              src="https://s3.amazonaws.com/eventimages/sponsors/ad337956.jpg?v=2"
              alt="Holmes Agency, Inc"
              maxH={32}
              objectFit="contain"
            />

            <Link href="https://westchesterautobody.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad346389.jpg?v=3"
                alt="West Chester Autobody"
                maxH={24}
                objectFit="contain"
              />
            </Link>
            <Link href="https://ever-roll.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad338029.jpg?v=3"
                alt="Ever-Roll Specialties Co."
                maxH={32}
                objectFit="contain"
              />
            </Link>

            <Image
              src="https://s3.amazonaws.com/eventimages/sponsors/ad341804.jpg?v=2"
              alt="Renewal by A-One Cleaners"
              maxH={32}
              objectFit="contain"
            />
          </SimpleGrid>

          <Heading as="h3" textAlign="center">
            Birdie Sponsors
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 3 }}
            gap={4}
            alignItems="center"
            justifyItems="center"
          >
            <Text fontWeight="bold" textAlign="center" fontSize="xl">
              Wene/Byerly Clan
            </Text>
            <Link href="https://callinterstate.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad346392.jpg?v=2"
                alt="Interstate Insurance"
                maxH={24}
                objectFit="contain"
              />
            </Link>
            <Link href="https://www.ahavacoffee.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad343448.jpg?v=2"
                alt="Ahava Coffee House"
                maxH={24}
                objectFit="contain"
              />
            </Link>
            <Link href="https://littlemiamioutfitters.com" isExternal>
              <Image
                src="/images/little-miami-outfitters.webp"
                alt="Little Miami Outfitters"
                maxH={32}
                objectFit="contain"
              />
            </Link>
            <Link
              href="https://www.etsy.com/shop/thetimberandtwine/?etsrc=sdt"
              isExternal
            >
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad346390.jpg?v=6"
                alt="Timber & Twine"
                maxH={32}
                objectFit="contain"
              />
            </Link>

            <Image
              src="https://s3.amazonaws.com/eventimages/sponsors/ad346366.jpg?v=2"
              alt="The Cantrell Family"
              maxH={32}
              objectFit="contain"
            />
            <Link href="https://crusa.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad338863.jpg?v=3"
                alt="Crusa Construction & Restoration Solutions"
                maxH={16}
                objectFit="contain"
              />
            </Link>
            <Link href="https://www.handainsurancepros.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad343445.jpg?v=2"
                alt="Hoernemann & Associates"
                maxH={16}
                objectFit="contain"
              />
            </Link>

            <Link href="https://www.flubsicecream.com" isExternal>
              <Image
                src="https://s3.amazonaws.com/eventimages/sponsors/ad343446.jpg?v=2"
                alt="Flub's Ice Cream"
                maxH={32}
                objectFit="contain"
              />
            </Link>
          </SimpleGrid>

          <Heading as="h3" textAlign="center">
            Tee Sponsors
          </Heading>
          <Stack alignItems="center">
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              gap={4}
              alignItems="center"
              justifyItems="center"
            >
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Badin High School
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Gump Check, LLC.
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Hoernemann & Associates Insurance Agency
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Kevin Harlan - President, Atrium Medical Center
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Rightwealth Advistors
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Miami Valley Gaming
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Nat&apos;s Cookie Crumbles
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Firefighter&apos;s & Company Federal Credit Union
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Mike & Anjanette Stautberg
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                Numprik Thai Lao
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                St. Rita Class of 1964
              </Text>
              <Text fontWeight="bold" textAlign="center" fontSize="xl">
                The Garver Insurance Agency
              </Text>
            </SimpleGrid>
          </Stack>
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
              <Heading as="h3">Basket of Booze</Heading>
              <Text>
                Once again, we raffled off a bunch of booze! The included items
                were:
              </Text>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                fontSize="sm"
                gap={2}
              >
                <Text>1800 Reposade</Text>
                <Text>Absolute Vanilla</Text>
                <Text>American Honey</Text>
                <Text>Bacardi Rum</Text>
                <Text>Crown Royal - Bengal&apos;s Edition</Text>
                <Text>Crown Royal Salted Caramel</Text>
                <Text>Disaronno Amaretto</Text>
                <Text>Effen Vodka</Text>
                <Text>Fireball</Text>
                <Text>Hornitos Tequila</Text>
                <Text>Jägermeister</Text>
                <Text>Jameson</Text>
                <Text>Jim Beam Red Stag</Text>
                <Text>Johnny Walker Red Label</Text>
                <Text>Malibu Rum</Text>
                <Text>Ole Smokey Blackberry Moonshine</Text>
                <Text>Rumchata</Text>
                <Text>Sailor Jerry Spiced Rum</Text>
                <Text>Skrewball Peanut Butter Whiskey</Text>
                <Text>Tequila Rose</Text>
                <Text>Woodford Reserve</Text>
              </SimpleGrid>
            </Stack>
            <Image
              gridColumn={{ md: '4 / span 2' }}
              gridRow={1}
              src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480759955_576397658731298_393351741291654228_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZuHVmsArVIcQ7kNvgGR8PCt&_nc_oc=AdjCZSJ_vnglBvnZCRJnH3div5zxgn8Rt-zy-CiPBvAA_w-cprbjfIfyrY2ItZh99Hc&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=gxHW9D-IQL-y1nULrQrt7w&oh=00_AYGp-8XKYOPVe07h49lM1jRzLAqxD6afhI0AZoy2VFpZDA&oe=67DF5A30"
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

          <Heading as="h3">Other Raffles</Heading>
          <SimpleGrid columns={{ base: 2, md: 5 }} gap={8}>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480424969_576397875397943_751420501021001937_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K6sQgA9HtCwQ7kNvgHo3D_Q&_nc_oc=Adlgudotg1GqN0KOqRwxs__iAWXAfUrNMQnifoAXKbr9sT2kGtZ7pKnzgZ1TbUzcZC8&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=2wzq_76nHDRXQNNRjl2LjA&oh=00_AYGDq0S6XXvGaA3WsxMPtcRdc6JP3QoMELj1wYrOjGo2EQ&oe=67DF6F5B"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480424969_576397875397943_751420501021001937_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K6sQgA9HtCwQ7kNvgHo3D_Q&_nc_oc=Adlgudotg1GqN0KOqRwxs__iAWXAfUrNMQnifoAXKbr9sT2kGtZ7pKnzgZ1TbUzcZC8&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=2wzq_76nHDRXQNNRjl2LjA&oh=00_AYGDq0S6XXvGaA3WsxMPtcRdc6JP3QoMELj1wYrOjGo2EQ&oe=67DF6F5B"
                alt="Raffle items 1"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480318434_576397445397986_4467588211714804258_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VIZ0lKkg5uQQ7kNvgFI5Gbd&_nc_oc=Adki1ztl7kNnTIXFwH22ZUKRx1wy3tRpAA981-oJNZaa-_HmvGPV91qz03yHtMv1F8w&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=9AskUKDw7CMnjHx2fOt-pQ&oh=00_AYHopE-TEjitJMpXtjOl0DBMoMQVFIk-dkGp_U9hayKL3w&oe=67DF7E98"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480318434_576397445397986_4467588211714804258_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VIZ0lKkg5uQQ7kNvgFI5Gbd&_nc_oc=Adki1ztl7kNnTIXFwH22ZUKRx1wy3tRpAA981-oJNZaa-_HmvGPV91qz03yHtMv1F8w&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=9AskUKDw7CMnjHx2fOt-pQ&oh=00_AYHopE-TEjitJMpXtjOl0DBMoMQVFIk-dkGp_U9hayKL3w&oe=67DF7E98"
                alt="Raffle items 2"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480578673_576397828731281_5160470563725754558_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h0vy8hh1tf0Q7kNvgF-VCFd&_nc_oc=AdnjxgC2n-0LLbpifO7E9xRPMu3P-ZbioeM0IMVin8mFTPXHXAyzgiNJTqj__MCv8t4&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=ZkDGZ1j2X5AKRrULVUPukw&oh=00_AYEKhEdSrPHcaivJxoLccAO_DG2fFHI76c8W-a2PYcLX9A&oe=67DF77D9"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480578673_576397828731281_5160470563725754558_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h0vy8hh1tf0Q7kNvgF-VCFd&_nc_oc=AdnjxgC2n-0LLbpifO7E9xRPMu3P-ZbioeM0IMVin8mFTPXHXAyzgiNJTqj__MCv8t4&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=ZkDGZ1j2X5AKRrULVUPukw&oh=00_AYEKhEdSrPHcaivJxoLccAO_DG2fFHI76c8W-a2PYcLX9A&oe=67DF77D9"
                alt="Raffle items 3"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480552127_576397675397963_7002262711194297946_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BwLSheXK3ZEQ7kNvgHJs6lR&_nc_oc=AdnVCnbfmtKzeV2DuY7Bw0_os24HreTv9nipXI0T2TwEIP-8-F3wgUttzfVkHOYtQmc&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=Ua-MLqytDvAaBL56_09HnQ&oh=00_AYFRzo0pNTKkvlv-TUyyDdPgqRqmylLXNutJn1qu7eH8VQ&oe=67DF7B29"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480552127_576397675397963_7002262711194297946_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BwLSheXK3ZEQ7kNvgHJs6lR&_nc_oc=AdnVCnbfmtKzeV2DuY7Bw0_os24HreTv9nipXI0T2TwEIP-8-F3wgUttzfVkHOYtQmc&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=Ua-MLqytDvAaBL56_09HnQ&oh=00_AYFRzo0pNTKkvlv-TUyyDdPgqRqmylLXNutJn1qu7eH8VQ&oe=67DF7B29"
                alt="Raffle items 4"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480706276_576397888731275_5030428773267100396_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W-1bmG_9aOYQ7kNvgH37qnB&_nc_oc=Admi3rBpuueT2gb5GkBYl2hslEAsWQ-VVTyWg89XStTTz2TJ45Rfg2a74-30l-3SB6k&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=dvWJB1lzdO-IVFWGTXBHWA&oh=00_AYGstXwqwUX4nAvTZhtL2LUffEC-Vl_R8o-VwJU6sMDZJw&oe=67DF96CD"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480706276_576397888731275_5030428773267100396_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W-1bmG_9aOYQ7kNvgH37qnB&_nc_oc=Admi3rBpuueT2gb5GkBYl2hslEAsWQ-VVTyWg89XStTTz2TJ45Rfg2a74-30l-3SB6k&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=dvWJB1lzdO-IVFWGTXBHWA&oh=00_AYGstXwqwUX4nAvTZhtL2LUffEC-Vl_R8o-VwJU6sMDZJw&oe=67DF96CD"
                alt="Raffle items 5"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480544344_576397438731320_7640038943328650423_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Rs-AvGwI-eEQ7kNvgHMmeEa&_nc_oc=Adm3t_ibyWFHVHmCu0BYPgj2LMNEigGjN22pSWAfQVIFBEivZrVi2euI1yLiOKPQE8A&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=clKaZKqYRY8_qitnq8uv8w&oh=00_AYEVJz4jSyD6vXxRrFPeyC4gmm2595oqc7GbNjckPU9pzA&oe=67DF717F"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480544344_576397438731320_7640038943328650423_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Rs-AvGwI-eEQ7kNvgHMmeEa&_nc_oc=Adm3t_ibyWFHVHmCu0BYPgj2LMNEigGjN22pSWAfQVIFBEivZrVi2euI1yLiOKPQE8A&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=clKaZKqYRY8_qitnq8uv8w&oh=00_AYEVJz4jSyD6vXxRrFPeyC4gmm2595oqc7GbNjckPU9pzA&oe=67DF717F"
                alt="Raffle items 6"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480461443_576397705397960_3218401172047777222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jvbnwVTJ02gQ7kNvgHAj0Rl&_nc_oc=AdkW4Ozm0I0jDIZjODuhVdHMO_aYF2kwz0iB_E6mEmcVUu7ZLzJ68421erle-EFe_QU&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=NnYlf1gF6L05zJa8fB9D-g&oh=00_AYEu1r1VdNQSjEqGgCLVq8SpLSU9r8gbA0BTXAHOZUnQgA&oe=67DF97BF"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480461443_576397705397960_3218401172047777222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jvbnwVTJ02gQ7kNvgHAj0Rl&_nc_oc=AdkW4Ozm0I0jDIZjODuhVdHMO_aYF2kwz0iB_E6mEmcVUu7ZLzJ68421erle-EFe_QU&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=NnYlf1gF6L05zJa8fB9D-g&oh=00_AYEu1r1VdNQSjEqGgCLVq8SpLSU9r8gbA0BTXAHOZUnQgA&oe=67DF97BF"
                alt="Raffle items 7"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480537000_576397655397965_5129015852587137762_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RgSDvVQT7qEQ7kNvgGfBd07&_nc_oc=Adly-Q4aY2NRdoJi2t_CF9P74DhYyPbBN5CwxFBpukkiolAIViOHnVGhqW8V767OVPY&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=YzsmXHhJJcaxm4ouCxZpvw&oh=00_AYGlkHsHAj7PbEg4SH1BmULr1HYNwdrElBWzvG4FeK8V2Q&oe=67DF7A9B"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480537000_576397655397965_5129015852587137762_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RgSDvVQT7qEQ7kNvgGfBd07&_nc_oc=Adly-Q4aY2NRdoJi2t_CF9P74DhYyPbBN5CwxFBpukkiolAIViOHnVGhqW8V767OVPY&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=YzsmXHhJJcaxm4ouCxZpvw&oh=00_AYGlkHsHAj7PbEg4SH1BmULr1HYNwdrElBWzvG4FeK8V2Q&oe=67DF7A9B"
                alt="Raffle items 8"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480463472_576397932064604_4010029309360390260_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EvPc1IMVRM8Q7kNvgFN-bk_&_nc_oc=Adkv5htT3AvcZ8nbAbar6NhUV2XbsV6nwAUym0yuPVHm-yVqHiFSWnBbgRwu0a9q0rE&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=ET4sNP9QKIgtB_y-efS8DA&oh=00_AYEFfBxbhlRLKGxWMD5hE2tkIyndIzzO40BPhgLJWUr9HA&oe=67DF99C4"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480463472_576397932064604_4010029309360390260_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EvPc1IMVRM8Q7kNvgFN-bk_&_nc_oc=Adkv5htT3AvcZ8nbAbar6NhUV2XbsV6nwAUym0yuPVHm-yVqHiFSWnBbgRwu0a9q0rE&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=ET4sNP9QKIgtB_y-efS8DA&oh=00_AYEFfBxbhlRLKGxWMD5hE2tkIyndIzzO40BPhgLJWUr9HA&oe=67DF99C4"
                alt="Raffle items 9"
              />
            </Link>
            <Link
              href="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480524100_576397832064614_4281121784395419939_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dun5g4KsxZUQ7kNvgHQcAs6&_nc_oc=AdlwqKO6Bky7e3TO2B2x6errtxotgUXy8Hob4qR6VQV1FNNPi65XBmzk2UVtNsmh9Nk&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=NkNTUlg1Q6XX8bGBkjBYUA&oh=00_AYEmLZ9iPrb88-PZvriHGqgHmoeTOuBg8hXanv-BNoYrig&oe=67DF7DE9"
              isExternal
            >
              <Image
                src="https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/480524100_576397832064614_4281121784395419939_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dun5g4KsxZUQ7kNvgHQcAs6&_nc_oc=AdlwqKO6Bky7e3TO2B2x6errtxotgUXy8Hob4qR6VQV1FNNPi65XBmzk2UVtNsmh9Nk&_nc_zt=23&_nc_ht=scontent.ftol2-1.fna&_nc_gid=NkNTUlg1Q6XX8bGBkjBYUA&oh=00_AYEmLZ9iPrb88-PZvriHGqgHmoeTOuBg8hXanv-BNoYrig&oe=67DF7DE9"
                alt="Raffle items 10"
              />
            </Link>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
