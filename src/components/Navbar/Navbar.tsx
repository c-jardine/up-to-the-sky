import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const DesktopNav = () => {
  const router = useRouter();
  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      justifyContent="space-between"
      w="full"
    >
      <HStack
        spacing={2}
        flexGrow={1}
        fontWeight="semibold"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        {links.map((link, index) => (
          <Button
            key={index}
            variant="nav"
            onClick={() => void router.push(link.href)}
          >
            {link.label}
          </Button>
        ))}
      </HStack>
      <Button variant="primary" rounded="sm">
        Donate
      </Button>
    </Box>
  );
};

const MobileNav = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const _handleOnClick = (href: string) => {
    void router.push(href);
    onClose();
  };
  return (
    <Box
      display={{ base: 'flex', md: 'none' }}
      justifyContent="flex-end"
      w="full"
    >
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        finalFocusRef={btnRef}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack>
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="nav"
                  justifyContent="flex-start"
                  onClick={() => _handleOnClick(link.href)}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="primary" w="full">
              Donate
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box h={16} bg="white" borderBottomWidth={1}>
      <Container maxW="7xl" w="full" h="full">
        <HStack w="full" h="full" spacing={8}>
          <Image
            src="/images/logo-butterfly.png"
            alt='A butterfly with a grey cancer ribbon for a body, featuring the text "Up to the Sky"'
            position="relative"
            h={12}
            filter="drop-shadow(2px 2px 3px #5282c1)"
          />
          <MobileNav />
          <DesktopNav />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
