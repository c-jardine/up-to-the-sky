import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const DonateBox = () => {
  return (
    <Box px={{ base: 4, xl: 0 }} maxW="6xl" w="full" alignSelf="center">
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
            <Button
              as="a"
              href="https://e.givesmart.com/events/sIm/"
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
            >
              Donate online <Icon ml={2} as={ExternalLinkIcon} />
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={12}>
          <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="semibold">
              Want to donate in person? Check for upcoming fundraising events:
            </Text>
            <Button as={Link} href="/events" variant="primary">
              View events <Icon ml={2} as={ChevronRightIcon} boxSize={5} />
            </Button>
          </Stack>
          <Stack>
            <Heading
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
      </SimpleGrid>
    </Box>
  );
};
export default DonateBox;
