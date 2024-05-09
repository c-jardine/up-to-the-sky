import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';

export default function Logo({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <Stack as={Link} href={href} target="_blank" rel="noreferrer" role="group">
      <Box position="relative" w="fit-content" mx="auto">
        <Image src={src} alt={`${name} logo`} maxH={32} objectFit="contain" />
      </Box>
      <Text
        fontWeight="semibold"
        textAlign="center"
        transition="200ms ease-in-out"
        _groupHover={{ color: 'primary.500' }}
      >
        {name}
      </Text>
    </Stack>
  );
}
