import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import atrium from '../../../public/images/atrium-medical-center-foundation.png';
import { ExternalLink } from 'lucide-react';

const DonateBox = () => {
  return (
    <Box maxW="6xl" w="full" alignSelf="center">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        borderWidth={{ base: 6, md: 12 }}
        borderColor="primary.500"
        px={{ base: 4, md: 12 }}
        py={12}
        gap={16}
      >
        <Stack>
          <Heading
            as="h2"
            fontSize="lg"
            color="primary.500"
            textTransform="uppercase"
          >
            Donate Now
          </Heading>
          <Heading as="h3" pt={4} fontSize="2xl" fontWeight="semibold">
            Your gift is so very appreciated
          </Heading>
          <Stack maxW="container.md" mx="auto">
            <Text>
              Kristin&apos;s Endowment Fund at the Atrium Medical Center
              Foundation will provide funding for care and program assistance
              for neurology patients with brain tumors, as well as provide
              scholarships to nursing students at Ohio University with
              preference being given (when possible) to a Badin High School
              graduate.
            </Text>
            <Text color="primary.500" fontWeight="semibold">
              No act of generosity is too small to make a difference.
            </Text>
            <Text py={4}>
              Thank you for helping us keep Kristin&apos;s legacy alive.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
              <Button as={NextLink} href="/events" variant="primary">
                View events <Icon ml={2} as={ChevronRightIcon} boxSize={5} />
              </Button>
              <Button
                as="a"
                href="https://e.givesmart.com/events/sIm/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                Donate online <Icon ml={2} as={ExternalLinkIcon} />
              </Button>
            </SimpleGrid>
            <Heading
              pt={4}
              as="h2"
              fontWeight="semibold"
              fontSize="xl"
              letterSpacing="wide"
            >
              If preferred, checks can be sent to:
            </Heading>
            <Box>
              <Text>Atrium Medical Center Foundation</Text>
              <Text>Attn: Kristin Renee Cantrell Hill Memorial Endowment</Text>
              <Text>One Medical Center Drive</Text>
              <Text>Middletown, OH 45005</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack spacing={6}>
          <Image src={atrium} alt="Atrium Medical Center Foundation" />
          <Text>
            Your donation will go to the Atrium Medical Center Foundation. Aside
            from benefitting Kristin&apos;s Endowment Fund, Atrium helps to
            ensure that residents of Southwest Ohio receive the health care
            services they need, close to home.
          </Text>
          <Text>
            To learn more about the Atrium Medical Center Foundation, visit
            their website{' '}
            <Link
              as={NextLink}
              href="https://www.premierhealth.com/locations/hospitals/atrium-medical-center/ways-to-help/foundation"
              target="_blank"
              rel="noopener"
              fontWeight="semibold"
              color="secondary.500"
              _hover={{
                color: 'secondary.400',
              }}
            >
              here <Icon as={ExternalLink} boxSize={3} />
            </Link>
            .
          </Text>
          <Stack>
            <Text
              as="h2"
              fontWeight="semibold"
              fontSize="xl"
              letterSpacing="wide"
            >
              Contact information
            </Text>
            <Text fontWeight="semibold">
              Phone:{' '}
              <Link href="tel:+15139745144" fontWeight="normal">
                (513) 974-5144
              </Link>
            </Text>
            <Text fontWeight="semibold">
              Email:{' '}
              <Link
                href="mailto:foundation@atriummedcenter.org"
                fontWeight="normal"
              >
                foundation@atriummedcenter.org
              </Link>
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default DonateBox;
