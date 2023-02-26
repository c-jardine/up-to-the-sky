import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import YouTube from 'react-youtube';
import { InformationLayout } from '../components/layouts';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const GlioblastomaPage = () => {
  return (
    <InformationLayout smallTitle="About Glioblastoma" title="Glioblastoma 101">
      <Container maxW="2xl" w="full">
        <Stack borderLeftWidth={4} borderColor="secondary.500" pl={8}>
          <Text
            className={spectral.className}
            fontSize={{ base: '2xl', sm: '3xl' }}
            color="primary.500"
          >
            Glioblastoma is the most common, most aggressive, and most fatal
            primary brain tumor. Despite maximum treatment, patients only have a
            median survival time of 15 months because of the tumor&apos;s
            resistance to current therapeutic approaches.
          </Text>
          <Link
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3337398/"
            target="_blank"
            rel="noopener noreferrer"
            textAlign="end"
            display="flex"
            alignItems="center"
            w="max"
          >
            Journal of Neuro-Oncology <Icon as={ExternalLinkIcon} ml={2} />
          </Link>
        </Stack>
        <Heading as="h2" mt={20}>
          What is glioblastoma?
        </Heading>
        <Stack mt={4} color="blackAlpha.800" fontSize="xl">
          <Stack spacing={8}>
            <Text>
              Glioblastoma is a type of cancer that starts as a growth of cells
              in the brain or spinal cord. It grows quickly and can invade and
              destroy healthy tissue. Glioblastoma forms from cells called
              astrocytes that support nerve cells.
            </Text>
            <Text>
              Glioblastoma can happen at any age. But it tends to occur more
              often in older adults and more often in men. Glioblastoma symptoms
              include headaches that keep getting worse, nausea and vomiting,
              blurred or double vision, and seizures.
            </Text>
            <Text>
              <chakra.span fontWeight="bold">
                There&apos;s no cure for glioblastoma
              </chakra.span>
              , which is also known as glioblastoma multiforme. Treatments might
              slow cancer growth and reduce symptoms.
            </Text>
          </Stack>
          <Link
            href="https://www.mayoclinic.org/diseases-conditions/glioblastoma/cdc-20350148"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="md"
            display="flex"
            alignItems="center"
            w="max"
          >
            Mayo Clinic <Icon as={ExternalLinkIcon} ml={2} />
          </Link>
        </Stack>
      </Container>

      <Box position="relative" bg="primary.500" py={24} w="full">
        <Box
          position="absolute"
          top={-2}
          left="50%"
          w={8}
          h={8}
          bg="white"
          transform="rotate(45deg) translateX(-50%)"
        />
        <SimpleGrid
          columns={{ base: 1, lg: 5 }}
          gap={16}
          maxW="7xl"
          w="full"
          mx="auto"
          px={4}
        >
          <Box
            className="youtubeEmbed"
            borderWidth={4}
            gridColumn={{ base: 1, lg: '1 / span 3' }}
          >
            <YouTube videoId="1WV7Yapv6cs" title="What is Glioblastoma?" />
          </Box>
          <Stack gridColumn={{ base: 1, lg: '4 / span 2' }}>
            <Text fontSize="3xl" fontWeight="bold" color="white">
              What is Glioblastoma?
            </Text>
            <Text
              className={spectral.className}
              fontSize="2xl"
              color="whiteAlpha.900"
            >
              Doctors Maciej Mrugala, Suriya Jeyapalan, and Daniela Bota provide
              background information on glioblastoma, including how it differs
              from other brain tumors, the typical presentation, and outcomes.
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </InformationLayout>
  );
};

export default GlioblastomaPage;
