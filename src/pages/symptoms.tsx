import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Icon,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { InformationLayout } from '../components/layouts';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const DiagnosisPage = () => {
  return (
    <InformationLayout smallTitle="About Glioblastoma" title="Symptoms">
      <Container maxW="2xl" w="full">
        <Stack borderLeftWidth={4} borderColor="secondary.500" pl={8}>
          <Text
            className={spectral.className}
            fontSize={{ base: '2xl', sm: '3xl' }}
            color="primary.500"
          >
            Symptoms of glioblastoma can vary depending upon the location and
            size of the tumor. Many symptoms are related to brain swelling and
            increased pressure within the brain.
          </Text>
        </Stack>

        <Heading as="h2" mt={20}>
          Symptoms of glioblastoma
        </Heading>
        <Stack mt={4} color="blackAlpha.800" fontSize="xl">
          <Stack spacing={8}>
            <Stack>
              <Text>Symptoms of glioblastoma include:</Text>
              <UnorderedList pl={8}>
                <ListItem>Headache</ListItem>
                <ListItem>Seizures</ListItem>
                <ListItem>Nausea and vomiting</ListItem>
                <ListItem>Drowsiness</ListItem>
                <ListItem>Changes in mood or personality</ListItem>
                <ListItem>Weakness on one side of the body</ListItem>
                <ListItem>Memory loss</ListItem>
                <ListItem>Difficulty with speech</ListItem>
                <ListItem>Changes in vision</ListItem>
              </UnorderedList>
              <Text>
                Tumors in vital functional areas of the brain are likely to
                present with difficulty with language, vision, or weakness.
              </Text>
            </Stack>
          </Stack>
          <Link
            href="https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/glioblastoma-multiforme"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="md"
            display="flex"
            alignItems="center"
            w="max"
          >
            Penn Medicine <Icon as={ExternalLinkIcon} ml={2} />
          </Link>
        </Stack>
      </Container>
    </InformationLayout>
  );
};

export default DiagnosisPage;
