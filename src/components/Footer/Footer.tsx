import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Footer = () => {
  return (
    <Box py={16} px={{ base: 2, md: 0 }} bg="#3F4756">
      <Box
        maxW="container.md"
        px={{ base: 4, md: 16 }}
        mx="auto"
        borderWidth={4}
        borderColor="#00857C"
        position="relative"
      >
        <Box
          maxW="max"
          position="absolute"
          px={4}
          top={-5}
          left="50%"
          transform="translateX(-50%)"
        >
          <ChevronLeftIcon
            position="absolute"
            left={0.5}
            top="50%"
            transform="translateY(-50%)"
            boxSize={8}
            color="#00857C"
          />
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            bg="#3F4756"
            w="max"
            display="flex"
            px={8}
            // borderWidth="0 0.25rem"
            // borderColor="#00857C"
            // rounded="lg"
            color="white"
          >
            Join our email list
          </Text>
          <ChevronRightIcon
            position="absolute"
            right={0.5}
            top="50%"
            transform="translateY(-50%)"
            boxSize={8}
            color="#00857C"
          />
        </Box>
        <Stack p="2rem 2rem 1rem 2rem" alignItems="center" spacing={6}>
          <Text
            className={spectral.className}
            fontSize={{ base: 'xl', sm: '3xl' }}
            color="white"
            textAlign="center"
          >
            Get information on upcoming fundraisers and events.
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          maxW="md"
          mx="auto"
          mb={8}
        >
          <Input
            borderColor="#00857C"
            bg="whiteAlpha.50"
            color="whiteAlpha.900"
            inputMode="email"
            rounded="sm"
            placeholder="Enter your email"
          />
          <Button variant="secondary" rounded="sm">
            Sign up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
