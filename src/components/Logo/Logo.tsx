import {
  Box,
  BoxProps,
  Image,
  Link,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';

export default function Logo({
  name,
  src,
  href,
  containerProps,
  imgContainerProps,
}: {
  name: string;
  src: string;
  href?: string;
  containerProps?: StackProps;
  imgContainerProps?: BoxProps;
} & StackProps) {
  return (
    <Stack
      as={href ? Link : Stack}
      href={href && href}
      isExternal
      rel={href && 'noreferrer'}
      role="group"
      {...containerProps}
    >
      <Box position="relative" w="fit-content" mx="auto" {...imgContainerProps}>
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
