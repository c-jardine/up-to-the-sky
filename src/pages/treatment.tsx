import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { InformationLayout } from '../components/layouts';

const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const DiagnosisPage = () => {
  return (
    <InformationLayout smallTitle="About Glioblastoma" title="Treatments">
      <Container maxW="2xl" w="full">
        <Stack borderLeftWidth={4} borderColor="secondary.500" pl={8}>
          <Text
            className={spectral.className}
            fontSize={{ base: '2xl', sm: '3xl' }}
            color="primary.500"
          >
            Unfortunately, there is no cure for glioblastoma. However, there
            treatments are available for patients, including common cancer
            treatments and palliative care.
          </Text>
        </Stack>

        <Heading as="h2" mt={20}>
          How is glioblastoma treated?
        </Heading>
        <Stack mt={4} color="blackAlpha.800" fontSize="xl">
          <Stack spacing={8}>
            <Text>Glioblastoma treatment options include:</Text>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Surgery
              </Heading>
              <Text>
                A brain surgeon, also known as a neurosurgeon, works to remove
                as much of the tumor as possible. Glioblastoma often grows into
                the healthy brain tissue, so it might not be possible to remove
                all of the cancer cells. Most people have other treatments after
                surgery to get to the cancer cells that are left.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Radiation therapy
              </Heading>
              <Text>
                Radiation therapy uses powerful energy beams to kill cancer
                cells. The energy can come from sources such as X-rays and
                protons. During radiation therapy, you lie on a table while a
                machine moves around you. The machine directs radiation to
                certain points in your brain.
              </Text>
              <Text>
                Radiation therapy is usually recommended after surgery. It might
                be combined with chemotherapy. For people who can&apos;t have
                surgery, radiation therapy and chemotherapy may be the main
                treatment.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Chemotherapy
              </Heading>
              <Text>
                Chemotherapy uses strong medicines to kill cancer cells. A
                chemotherapy medicine taken as a pill is often used after
                surgery and during and after radiation therapy. Other types of
                chemotherapy given through a vein might be the treatment for
                glioblastoma that returns.
              </Text>
              <Text>
                Sometimes thin, circular wafers containing chemotherapy medicine
                might be put in the brain during surgery. The wafers dissolve
                slowly, releasing the medicine to kill cancer cells.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Tumor treating fields (TTF) therapy
              </Heading>
              <Text>
                TTF uses an electrical field to disrupt the cancer cells&apos;
                ability to multiply. TTF involves putting sticky pads on the
                scalp. The pads are connected to a portable device that creates
                an electrical field.
              </Text>
              <Text>
                TTF works with chemotherapy. It might be suggested after
                radiation therapy.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Targeted therapy
              </Heading>
              <Text>
                Targeted therapy uses medicines that attack specific chemicals
                in the cancer cells. By blocking these chemicals, targeted
                treatments can cause cancer cells to die.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Clinical trials
              </Heading>
              <Text>
                Clinical trials are studies of new treatments. These studies
                provide a chance to try the latest treatments. The risk of side
                effects might not be known. Ask your health care provider if you
                might be able to be in a clinical trial.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Supportive care
              </Heading>
              <Text>
                Supportive care, which is also called palliative care, focuses
                on relieving pain and other symptoms of serious illness. This
                extra layer of support goes with other treatments, such as
                surgery, chemotherapy or radiation therapy.
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
  );
};

export default DiagnosisPage;
