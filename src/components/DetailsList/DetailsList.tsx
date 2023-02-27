import { ChevronRightIcon, Icon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface DetailProps {
  id: number;
  title: string;
  description: string;
  href: string;
}

const details: DetailProps[] = [
  {
    id: 1,
    title: 'What are the symptoms of glioblastoma?',
    description:
      'Glioblastoma can result in personality changes, cognitive and behavioral changes, seizures, and more.',
    href: '/symptoms',
  },
  {
    id: 2,
    title: 'What causes glioblastoma?',
    description:
      "The cause of glioblastoma isn't fully understood, but there are risk factors that may increase the likelihood of developing one.",
    href: '/causes',
  },
  {
    id: 3,
    title: 'How is glioblastoma diagnosed?',
    description:
      'Doctors diagnose glioblastoma through a neurological exam, imaging tests (often MRI), and other special tests.',
    href: '/diagnosis',
  },
  {
    id: 4,
    title: 'How is Glioblastoma treated?',
    description:
      'In some cases, surgery can remove the tumor. Some other treatments include radiation therapy, chemotherapy, targeted therapy, and more.',
    href: '/treatment',
  },
];

const DetailsList = () => {
  const router = useRouter();
  return (
    <Container maxW="2xl" w="full">
      <Stack divider={<StackDivider />} spacing={12}>
        {details.map((detail) => {
          if (router.asPath !== detail.href) {
            return (
              <Stack key={detail.id}>
                <Heading as="h3">{detail.title}</Heading>
                <Text pb={4}>{detail.description}</Text>
                <Button
                  variant="secondary"
                  w="max"
                  onClick={() => void router.push(detail.href)}
                >
                  Learn more <Icon as={ChevronRightIcon} boxSize={5} />
                </Button>
              </Stack>
            );
          }
        })}
      </Stack>
    </Container>
  );
};

export default DetailsList;
