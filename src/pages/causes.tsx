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
import { InformationLayout } from '../components/layouts';
import { Quote } from '../components/Quote';

const DiagnosisPage = () => {
  return (
    <InformationLayout smallTitle="About Glioblastoma" title="Causes">
      <Container maxW="2xl" w="full">
        <Quote
          content="The exact cause of glioblastoma is not known. Some risk factors may
            make someone more likely to develop high-grade gliomas like
            glioblastoma, but the majority of patients have no family history or
            identifiable risk factors."
          source={{
            label: 'American Brain Tumor Association',
            href: 'https://www.abta.org/tumor_types/glioblastoma-gbm/',
          }}
        />

        <Heading as="h2" mt={20}>
          Causes of glioblastoma
        </Heading>
        <Stack mt={4} color="blackAlpha.800" fontSize="xl">
          <Stack spacing={8}>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Previous exposure to radiation
              </Heading>
              <Text>
                Exposure to ionizing radiation as a result of radiation therapy
                for childhood brain tumors or leukemia is a risk factor for
                high-grade gliomas like glioblastoma.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Rare genetic conditions
              </Heading>
              <Text>
                Hereditary disorders linked to genetic mutations, such as:
              </Text>
              <UnorderedList pl={8}>
                <ListItem>Turcot syndrome</ListItem>
                <ListItem>Neurofibromatosis type 1</ListItem>
                <ListItem>Li-Fraumeni syndrome</ListItem>
                <ListItem>Lynch syndrome</ListItem>
                <ListItem>
                  Constitutional mismatch repair deficiency syndrome
                </ListItem>
              </UnorderedList>
              <Text>
                Exposure to chemicals and other cancer-causing agents may
                increase your risk for genetic mutations.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Age and gender
              </Heading>
              <Text>
                Glioblastomas can occur at any age but are more common in older
                patients between the ages of 65 and 74. The median age of a
                glioblastoma diagnosis is 65.
              </Text>
              <Text>
                Glioblastomas are slightly more common in men than in women.
              </Text>
            </Stack>
          </Stack>
          <Link
            href="https://www.abta.org/tumor_types/glioblastoma-gbm/"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="md"
            display="flex"
            alignItems="center"
            w="max"
          >
            American Brain Tumor Association{' '}
            <Icon as={ExternalLinkIcon} ml={2} />
          </Link>
        </Stack>
      </Container>
    </InformationLayout>
  );
};

export default DiagnosisPage;
