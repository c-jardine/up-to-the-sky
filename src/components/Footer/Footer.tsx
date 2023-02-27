import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Icon,
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
            Make a donation to Up to the Sky, a memorial fund through Atrium
            Health Foundation.
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
            rel="noreferrer noopener"
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
    </Box>
  );
};

export default Footer;
