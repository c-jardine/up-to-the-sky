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
import { NextSeo } from 'next-seo';
import { InformationLayout } from '../components/layouts';
import { Quote } from '../components/Quote';

const DiagnosisPage = () => {
  return (
    <>
      <NextSeo
        title="Glioblastoma symptoms"
        description="Symptoms of glioblastoma can vary depending upon the location/size of the tumor. Many symptoms are related to swelling and increased pressure within the brain."
        canonical="https://www.uptothesky.org/symptoms"
      />
      <InformationLayout smallTitle="About Glioblastoma" title="Symptoms">
        <Container maxW="2xl" w="full">
          <Quote
            content="Symptoms of glioblastoma can vary depending upon the location and
            size of the tumor. Many symptoms are related to swelling and
            increased pressure within the brain."
            source={{
              label: 'Penn Medicine',
              href: '"https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/glioblastoma-multiforme"',
            }}
          />

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
    </>
  );
};

export default DiagnosisPage;
