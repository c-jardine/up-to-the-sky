import {
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Parisienne, Spectral } from '@next/font/google';
import NextLink from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const cursive = Parisienne({ weight: '400', subsets: ['latin'] });
const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Obituary = () => {
  return (
    <Stack maxW="4xl" mx="auto" my={16} px={4}>
      <Stack alignItems="center" spacing={16}>
        <Heading
          as="h1"
          fontFamily={cursive.style.fontFamily}
          fontSize={{ base: '5xl', sm: '6xl' }}
          textAlign="center"
        >
          In Loving Memory
        </Heading>
        <Image src="/images/kristin-1.jpg" alt="" maxH="sm" />
        <Heading
          as="h2"
          fontFamily={spectral.style.fontFamily}
          textAlign="center"
        >
          Kristin Renee Cantrell Hill
        </Heading>
      </Stack>
      <SimpleGrid
        templateColumns="1fr auto 1fr"
        alignItems="center"
        gap={4}
        fontSize="sm"
        textTransform="uppercase"
      >
        <Divider borderColor="black" />
        <Text>November 19, 1977 - December 7, 2020</Text>
        <Divider borderColor="black" />
      </SimpleGrid>
      <Stack spacing={8} pt={8}>
        <Text>
          HILL, Kristin Renee (Cantrell) age 43 of Fairfield passed away Monday,
          December 7, 2020 in Hospice of Hamilton. She was born November 19,
          1977 in Hamilton, Ohio the daughter of Charles R. Cantrell Sr. and
          Rebecca S. Cantrell.
        </Text>
        <Text>
          She is survived by her Husband, Ronald N. Hill Jr.; parents, Charles
          R. (Diane) Cantrell Sr. and Rebecca S. (nee Zakar) Cantrell; four
          children, Donaven Hill, Rebecca Dance, Reese Hill, and Reagan Hill;
          two brothers, Charles R. (Kim) Cantrell Jr., and Steven C. (Lori)
          Cantrell; and many more relatives and dear friends.
        </Text>
        Kristin was recently diagnosed with an inoperable brain tumor just one
        day after her 43 rd birthday. She had a short stay in the hospital and
        due to the aggressive nature of the tumor, no treatment was given. She
        was transferred to Hospice of Hamilton where she stayed five days
        surrounded by family and loving friends.
        <Text>
          She graduated from Ohio University with a BS in Nursing. Her career
          was primarily with TriHealth which ended as a Substance Use Treatment
          RN for TriHealth at Good Samaritan and Bethesda North hospitals.
          Kristin had the ability to touch so many lives as anyone who knew her
          and worked with her had stated so often during her illness.
        </Text>
        <Text>
          Rest in Peace our sweet angel. Daddy and your entire family of
          relatives and friends will love you forever...&quot;up to the
          sky&quot;.
        </Text>
        <Text>
          Friends are invited to attend a Mass of Christian Burial at 11:00am
          Saturday in Sacred Heart Church, 400 Nilles Rd. Fairfield, Ohio 45014,
          with Fr. Larry Tharp celebrant.
        </Text>
        <Text>
          Visitation will be from 10:00-11:00am Saturday in the Church Narthex.
          Memorials are suggested to Brain Cancer Research. Online register book
          available at{' '}
          <Link
            as={NextLink}
            isExternal
            href="http://www.zettlerfuneralhomes.com/obituary/kristin-hill"
            fontWeight="semibold"
          >
            www.zettlerfuneralhome.com <ExternalLinkIcon mt={-1} ml={1} />
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
};

export default Obituary;
