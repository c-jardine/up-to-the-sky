import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Icon, Link, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';

const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

interface QuoteProps {
  content: string;
  source: {
    label: string;
    href: string;
  };
}

const Quote = (props: QuoteProps) => {
  const { content, source } = props;
  return (
    <Stack
      borderLeftWidth={{ base: 0, md: 4 }}
      borderColor="secondary.500"
      pl={{ base: 0, md: 8 }}
      mt={{ base: -8, md: 0 }}
    >
      <Text
        className={spectral.className}
        fontSize={{ base: '2xl', md: '3xl' }}
        color="primary.500"
      >
        {content}
      </Text>
      <Link
        key={source.label}
        href={source.href}
        target="_blank"
        rel="noopener noreferrer"
        textAlign="end"
        display="flex"
        alignItems="center"
        w="max"
      >
        {source.label} <Icon as={ExternalLinkIcon} ml={2} />
      </Link>
    </Stack>
  );
};

export default Quote;
