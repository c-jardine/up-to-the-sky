import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  chakra,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Spectral } from '@next/font/google';
import { ChevronRight, ExternalLink } from 'lucide-react';
const spectral = Spectral({ weight: '500', subsets: ['latin'] });

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="#3F4756">
        <Container py={16} maxW="6xl" w="full">
          <Stack spacing={16} alignItems="center">
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
                  Make a difference
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
                  Make a donation to Up to the Sky, a memorial fund through
                  Atrium Health Foundation.
                </Text>
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                maxW="md"
                mx="auto"
                mb={8}
              >
                <Button
                  as="a"
                  href="https://e.givesmart.com/events/sIm/"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  flexBasis={{ sm: '50%' }}
                >
                  Donate online <Icon as={ExternalLink} ml={2} />
                </Button>
                <Button
                  variant="secondary"
                  onClick={onOpen}
                  flexBasis={{ sm: '50%' }}
                >
                  Mail a check <Icon as={ChevronRight} ml={2} />
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                  <ModalOverlay />
                  <ModalContent letterSpacing="wide">
                    <ModalHeader>Make a donation by check</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Stack>
                        <Text>
                          Donations by check should be mailed to the following
                          address:
                        </Text>
                        <Box bg="primary.50" p={6}>
                          <Text>Atrium Medical Center Foundation</Text>
                          <Text>
                            Attn: Kristin Renee Cantrell Hill Memorial Endowment
                          </Text>
                          <Text>One Medical Center Drive</Text>
                          <Text>Middletown, OH 45005</Text>
                        </Box>
                      </Stack>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="secondary" onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Box>
            <Divider borderColor="whiteAlpha.400" />
            <Flex
              wrap="wrap"
              gap={8}
              color="whiteAlpha.800"
              fontWeight="semibold"
              maxW="4xl"
              w="full"
              justifyContent="center"
            >
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/"
              >
                Home
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/glioblastoma"
              >
                Glioblastoma 101
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/symptoms"
              >
                Symptoms
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/causes"
              >
                Causes
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/diagnosis"
              >
                Diagnosis
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/treatment"
              >
                Treatment
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/events"
              >
                Events
              </Link>
              <Link
                transition="200ms ease-in-out"
                _hover={{ color: 'white' }}
                href="/about"
              >
                About us
              </Link>
            </Flex>
          </Stack>
        </Container>
      </Box>
      <Box bg="primary.800">
        <Container maxW="4xl" w="full" py={8} textAlign="center">
          <Text color="whiteAlpha.800">
            Website developed by{' '}
            <chakra.a
              href="https://www.keplux.com"
              target="_blank"
              rel="noopener"
              fontWeight="bold"
              _hover={{ color: 'white' }}
            >
              Keplux Development, LLC
            </chakra.a>
            .
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
