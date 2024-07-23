import { Box, Image, Link, Stack, StackProps, Text } from '@chakra-ui/react';

export default function Logo({
  name,
  src,
  href,
  ...props
}: {
  name: string;
  src: string;
  href?: string;
} & StackProps) {
  return (
    <Stack
      as={href ? Link : Stack}
      href={href && href}
      target={href && '_blank'}
      rel={href && 'noreferrer'}
      role="group"
      {...props}
    >
      <Box position="relative" w="fit-content" mx="auto">
        <Image src={src} alt={`${name} logo`} maxH={32} objectFit="contain" />
      </Box>
      <Text
        fontWeight="semibold"
        textAlign="center"
        transition="200ms ease-in-out"
        _groupHover={{ color: href && 'primary.500' }}
      >
        {name}
      </Text>
    </Stack>
  );
}
