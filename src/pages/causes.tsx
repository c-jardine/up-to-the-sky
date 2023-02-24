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
    <InformationLayout smallTitle="About Glioblastoma" title="Causes">
      <Container maxW="2xl" w="full">
        <Stack borderLeftWidth={4} borderColor="secondary.500" pl={8}>
          <Text
            className={spectral.className}
            fontSize={{ base: '2xl', sm: '3xl' }}
            color="primary.500"
          >
            Unfortunately, experts aren&apos;t sure what causes glioblastoma.
            However, certain things may make you more likely to have one.
          </Text>
        </Stack>

        <Heading as="h2" mt={20}>
          Causes of glioblastoma
        </Heading>
        <Stack mt={4} color="blackAlpha.800" fontSize="xl">
          <Stack spacing={8}>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Prior radiation to the head
              </Heading>
              <Text>
                If you previously got radiation to treat brain tumors or cancers
                that may have spread to the area, it can increase your risk for
                glioblastoma.
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
              </UnorderedList>
              <Text>
                Exposure to chemicals and other cancer-causing agents may also
                increase your risk for genetic mutations.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Age and gender
              </Heading>
              <Text>
                It&apos;s more common among those who are 50 or above. The
                average age for diagnosis is 64. Additionally, men are more
                likely to develop glioblastoma.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h3" fontSize="2xl">
                Race
              </Heading>
              <Text>
                Glioblastoma is more common among white people than it is among
                Black, Asian, and Indigenous groups.
              </Text>
            </Stack>
          </Stack>
          <Link
            href="https://www.webmd.com/cancer/brain-cancer/what-is-glioblastoma#091e9c5e80ef457d-1-5"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="md"
            display="flex"
            alignItems="center"
            w="max"
          >
            WebMD <Icon as={ExternalLinkIcon} ml={2} />
          </Link>
        </Stack>
      </Container>
    </InformationLayout>
  );
};

export default DiagnosisPage;
