import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import kristin from '../../../../../public/images/kristin-1.jpg';
import { CollageWithFullSide } from '../../../CollageWithFullSide';

const RememberingKristin = () => {
  return (
    <CollageWithFullSide
      card={{
        heading: 'Remembering Kristin',
        content: (
          <>
            <Text>
              Kristin Renee Cantrell Hill was diagnosed with an inoperable brain
              tumor just after her 43rd birthday. She passed away just 17 days
              after her diagnosis.
            </Text>
            <Text>
              Kristin was a loving daughter, sister, wife, and mother. A
              resident of Fairfield, Ohio, Kristin received her BSN from Ohio
              University and was a substance use treatment nurse at hospitals in
              the Greater Cincinnati region.
            </Text>
            <Link
              as={NextLink}
              href="/obituary"
              fontWeight="semibold"
              color="primary.500"
              transition="200ms ease-in-out"
              _hover={{
                textDecoration: 'none',
                filter: 'brightness(120%)',
              }}
            >
              Read Kristin&apos;s obituary{' '}
              <ChevronRightIcon mt={-1} boxSize={5} />
            </Link>
          </>
        ),
      }}
      image={{
        src: kristin,
        alt: 'Kristin Renee Cantrell Hill',
      }}
    />
  );
};

export default RememberingKristin;
