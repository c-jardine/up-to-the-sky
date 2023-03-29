import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import glioblastomaGraphic from '../../public/images/glioblastoma-graphic.jpg';
import { InformationLayout } from '../components/layouts';
import { Quote } from '../components/Quote';

const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const DiagnosisPage = () => {
  return (
    <>
      <NextSeo
        title="Glioblastoma treatment"
        description="There is no cure for glioblastomas and they are difficult to treat. They are fast-growing and invade nearby brain tissue, making complete removal nearly impossible."
        canonical="https://www.uptothesky.org/treatment"
      />
      <InformationLayout smallTitle="About Glioblastoma" title="Treatment">
        <Container maxW="2xl" w="full">
          <Quote
            content="There is no cure for glioblastomas and they are difficult to treat.
            They are fast-growing and invade nearby brain tissue, making
            complete removal nearly impossible. The blood-brain barrier prevents
            certain treatments from being able to reach the tumor and be
            effective."
            source={{
              label: 'American Brain Cancer Association',
              href: '"https://www.abta.org/tumor_types/glioblastoma-gbm/"',
            }}
          />

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
                  Surgery is often the first step in treating glioblastoma.
                  Surgery allows the medical team to get a biopsy and make a
                  diagnosis, relieve pressure on the brain, and safely remove as
                  much tumor as possible. Glioblastomas are diffuse and have
                  finger-like tentacles that infiltrate the brain, which makes
                  them very difficult to remove completely. This is particularly
                  true when the tumors are growing near important regions of the
                  brain that control functions such as language and
                  movement/coordination.
                </Text>
              </Stack>
              <Stack>
                <Heading as="h3" fontSize="2xl">
                  Radiation and chemotherapy
                </Heading>
                <Text>
                  Radiation therapy uses powerful energy beams to kill cancer
                  cells. The energy can come from sources such as X-rays and
                  protons. During radiation therapy, you lie on a table while a
                  machine moves around you. The machine directs radiation to
                  certain points in your brain.
                </Text>
                <Text>
                  Radiation therapy is usually recommended after surgery. It
                  might be combined with chemotherapy. For people who can&apos;t
                  have surgery, radiation therapy and chemotherapy may be the
                  main treatment.
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
                  Sometimes thin, circular wafers containing chemotherapy
                  medicine might be put in the brain during surgery. The wafers
                  dissolve slowly, releasing the medicine to kill cancer cells.
                </Text>
              </Stack>
              <Stack>
                <Heading as="h3" fontSize="2xl">
                  Tumor treating fields (TTF) therapy
                </Heading>
                <Text>
                  TTF uses an electrical field to disrupt the cancer cells&apos;
                  ability to multiply. TTF involves putting sticky pads on the
                  scalp. The pads are connected to a portable device that
                  creates an electrical field.
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
            columns={{ base: 1, lg: 2 }}
            gap={16}
            maxW="7xl"
            w="full"
            mx="auto"
            px={4}
          >
            <Box position="relative" borderWidth={4}>
              <Image
                src={glioblastomaGraphic}
                alt="A brain tumor highlighted in red on an x-ray styled graphic of a human head."
              />
            </Box>
            <Stack>
              <Text fontSize="3xl" fontWeight="bold" color="white">
                Clinical Trials
              </Text>
              <Text
                className={spectral.className}
                fontSize="2xl"
                color="whiteAlpha.900"
              >
                Clinical trials are studies of new treatments. These studies
                provide a chance to try the latest treatments. The risk of side
                effects might not be known. Ask your health care provider if you
                might be able to be in a clinical trial.
              </Text>
              <Text color="whiteAlpha.900" pt={4}>
                To learn more about clinical trials, view the American Brain
                Tumor Association&apos;s Clinical Trials brochure:
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                <Button
                  as={Link}
                  variant="secondary"
                  href="/clinical-trials-brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View online <Icon ml={2} as={ExternalLinkIcon} />
                </Button>
                <Button
                  as={Link}
                  rounded="full"
                  href="/clinical-trials-brochure.pdf"
                  download
                >
                  Download now <Icon ml={2} as={DownloadIcon} />
                </Button>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        </Box>
      </InformationLayout>
    </>
  );
};

export default DiagnosisPage;
