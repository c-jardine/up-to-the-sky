import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { InformationLayout } from '../components/layouts';
import { Quote } from '../components/Quote';

const DiagnosisPage = () => {
  return (
    <>
      <NextSeo
        title="Glioblastoma diagnosis"
        description="A neurologist will give you an exam and request testing to be done depending on your symptoms, such as MRI and CT scans and tumor biopsy. Click to learn more."
        canonical="https://www.uptothesky.org/diagnosis"
      />
      <InformationLayout smallTitle="About Glioblastoma" title="Diagnosis">
        <Container maxW="2xl" w="full">
          <Quote
            content="A neurologist will give you an exam and request testing to be done
            depending on your symptoms."
            source={{
              label: 'Mayo Clinic',
              href: '"https://www.mayoclinic.org/diseases-conditions/glioblastoma/cdc-20350148"',
            }}
          />
          <Heading as="h2" mt={20}>
            Diagnosing glioblastoma
          </Heading>
          <Stack mt={4} color="blackAlpha.800" fontSize="xl">
            <Stack spacing={8}>
              <Stack>
                <Heading as="h3" fontSize="2xl">
                  Neurologic exam
                </Heading>
                <Text>
                  This type of exam checks vision, hearing, balance,
                  coordination, strength and reflexes. Problems in one or more
                  of these areas might give clues about the part of the brain
                  the glioblastoma affects.
                </Text>
              </Stack>
              <Stack>
                <Heading as="h3" fontSize="2xl">
                  Imaging tests
                </Heading>
                <Text>
                  Imaging tests can help find the location and size of a
                  glioblastoma. MRI is often used to diagnose glioblastoma.
                  Other imaging tests might include CT and positron emission
                  tomography (PET).
                </Text>
              </Stack>
              <Stack>
                <Heading as="h3" fontSize="2xl">
                  Biopsy
                </Heading>
                <Text>
                  A biopsy is a procedure to remove a sample of tissue for
                  testing. It can be done with a needle before surgery or during
                  surgery to remove the glioblastoma. The sample is sent to a
                  lab for testing. Tests can tell whether the cells are
                  cancerous and if they&apos;re glioblastoma cells.
                </Text>
              </Stack>
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
      </InformationLayout>
    </>
  );
};

export default DiagnosisPage;
