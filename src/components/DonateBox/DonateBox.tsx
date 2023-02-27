import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

const DonateBox = () => {
  return (
    <Box px={{ base: 4, xl: 0 }} maxW="6xl" w="full" alignSelf="center">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        shadow="2xl"
        borderWidth={{ base: 6, md: 12 }}
        borderColor="primary.500"
        px={{ base: 4, md: 12 }}
        py={12}
        gap={16}
      >
        <Stack>
          <Heading
            as="h2"
            fontSize="lg"
            color="primary.500"
            textTransform="uppercase"
          >
            Donate Now
          </Heading>
          <Heading as="h3" pt={4} fontSize="2xl" fontWeight="semibold">
            Your gift is so very appreciated
          </Heading>
          <Stack maxW="container.md" mx="auto">
            <Text>
              Kristin&apos;s Endowment Fund at the Atrium Medical Center
              Foundation will provide funding for care and program assistance
              for neurology patients with brain tumors, as well as provide
              scholarships to nursing students at Ohio University with
              preference being given (when possible) to a Badin High School
              graduate.
            </Text>
            <Text color="primary.500" fontWeight="semibold">
              No act of generosity is too small to make a difference.
            </Text>
            <Text pt={4}>
              Thank you for helping us keep Kristin&apos;s legacy alive.
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <Text>How much would you like to donate?</Text>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
            <Button variant="secondary">$50</Button>
            <Button variant="secondary">$100</Button>
            <Button variant="secondary">$250</Button>
            <Button variant="secondary">$500</Button>
            <Button variant="secondary">$1,000</Button>
            <Button variant="secondary">$2,500</Button>
          </SimpleGrid>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.400">
              $
            </InputLeftElement>
            <Input placeholder="Other amount" inputMode="numeric" />
          </InputGroup>
          <Button variant="secondary" disabled w="full">
            Donate
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default DonateBox;
