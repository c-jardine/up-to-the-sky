import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  AbsoluteCenter,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Facebook } from 'lucide-react';
import NextLink from 'next/link';
import React from 'react';

export default function WithSubnavigation() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const mobileMenuRef = React.useRef();

  return (
    <Box>
      <Box
        display={{ base: 'none', md: 'flex' }}
        px={8}
        h={36}
        borderBottomWidth={1}
      >
        <Container
          display="flex"
          position="relative"
          maxW="8xl"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          h="full"
        >
          <Box
            aria-label="Go to the Up to the Sky Facebook page"
            as={Link}
            href="https://www.facebook.com/profile.php?id=100090832053090&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
            role="group"
          >
            <Icon
              as={Facebook}
              boxSize={8}
              fill="primary.500"
              strokeWidth={0}
              transition="200ms ease-in-out"
              _groupHover={{ fill: 'primary.400' }}
            />
          </Box>
          <AbsoluteCenter>
            <Image
              src="/images/logo.png"
              alt="Up to the Sky logo featuring a butterfly with a brain cancer awareness ribbon for a body."
              maxH={28}
            />
          </AbsoluteCenter>
          <Button
            as="a"
            href="https://e.givesmart.com/events/sIm/"
            target="_blank"
            rel="noreferrer"
            variant="primary"
            size="lg"
            display={{ base: 'none', md: 'flex' }}
            rounded="none"
          >
            Donate
          </Button>
        </Container>
      </Box>
      <Flex
        bg="white"
        color="blackAlpha.700"
        h={{ base: 16, md: 20 }}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="blackAlpha.200"
        align="center"
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'space-between', md: 'center' }}
          alignItems="center"
        >
          <Box as={NextLink} href="/">
            <Image
              display={{ base: 'block', md: 'none' }}
              src="/images/logo-butterfly.png"
              alt='A butterfly with a grey cancer ribbon for a body, featuring the text "Up to the Sky"'
              position="relative"
              h={12}
            />
          </Box>

          <IconButton
            ref={mobileMenuRef}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={mobileMenuRef}
        placement="left"
      >
        <DrawerOverlay mt={16} />
        <DrawerContent mt={16}>
          <DrawerBody>
            <MobileNav onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        if (navItem.children) {
          return <DesktopNavItem key={navItem.label} {...navItem} />;
        }
        return <DesktopNavItem key={navItem.label} {...navItem} />;
      })}
    </Stack>
  );
};

const DesktopNavItem = (props: NavItem) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box position="relative" key={props.label} role="group">
      <Box
        position="absolute"
        bottom={-2}
        left="50%"
        w={8}
        h="0.5"
        bg="secondary.500"
        transform="translate(-50%) scaleX(0)"
        transition="200ms ease-in-out"
        _groupHover={{
          transform: 'translate(-50%) scaleX(1)',
        }}
      />
      <Box ref={btnRef} onClick={props.children && onOpen}>
        <Link
          as={NextLink}
          p={2}
          href={props.href ?? '#'}
          fontSize="xl"
          letterSpacing="wider"
          color="primary.700"
          aria-label={props.children && 'Toggle sub-navigation'}
        >
          {props.label}
          {props.children && (
            <Icon
              ml={1}
              as={ChevronDownIcon}
              transition="250ms ease-in-out"
              transform={isOpen ? 'rotate(-180deg)' : ''}
            />
          )}
        </Link>
      </Box>
      {props.children && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          placement="bottom"
          isFullHeight
        >
          <DrawerContent
            mt={52}
            border={0}
            boxShadow="xl"
            bg="primary.700"
            w="100vw"
            px={4}
            py={6}
            rounded="none"
            minW={'sm'}
            top="13px"
          >
            <DrawerBody>
              <Container maxW="6xl" w="full">
                <SimpleGrid columns={4} gap={12}>
                  {props.children.map((child) => (
                    <DesktopSubNav
                      key={child.sectionLabel}
                      item={child}
                      onClose={onClose}
                    />
                  ))}
                </SimpleGrid>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

const DesktopSubNav = (props: {
  key: React.Key;
  item: SubNavItem;
  onClose: () => void;
}) => {
  const { item, onClose } = props;
  return (
    <Stack>
      <Text
        fontSize="xs"
        fontWeight="bold"
        pb={2}
        mx={2}
        mb={2}
        color="primary.200"
        letterSpacing="wide"
        borderBottomWidth={1}
        borderColor="primary.300"
      >
        {item.sectionLabel}
      </Text>
      {item.children.map((child) => (
        <Link
          as={NextLink}
          key={child.label}
          href={child.href}
          target={child.isExternal ? '_blank' : '_self'}
          rel={child.isExternal && 'noreferrer'}
          role="group"
          p={2}
          rounded="sm"
          _hover={{ bg: 'primary.600' }}
          onClick={onClose}
        >
          <Stack direction="row" align="center">
            <Box>
              <Text
                letterSpacing="wide"
                transition="all .3s ease"
                _groupHover={{ color: 'primary.200' }}
                fontWeight={500}
                color="primary.100"
              >
                {child.label}
              </Text>
            </Box>
            <Flex
              transition="all .3s ease"
              transform="translateX(-10px)"
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify="flex-end"
              align="center"
              flex={1}
            >
              <Icon color="primary.300" w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = (props: { onClose: () => void }) => {
  const { onClose } = props;
  return (
    <Stack
      bg="white"
      py={4}
      display={{ md: 'none' }}
      spacing={4}
      alignItems="center"
    >
      <Button
        as="a"
        href="https://e.givesmart.com/events/sIm/"
        target="_blank"
        rel="noreferrer"
        variant="primary"
        rounded="sm"
        w="full"
        onClick={onClose}
      >
        Donate
      </Button>
      <Stack divider={<StackDivider />}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} item={navItem} onClose={onClose} />
        ))}
      </Stack>
      <Flex justifyContent="center">
        <Box
          aria-label="Go to the Up to the Sky Facebook page"
          as={Link}
          href="https://www.facebook.com/profile.php?id=100090832053090&mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
          role="group"
        >
          <Icon
            as={Facebook}
            boxSize={8}
            fill="primary.500"
            strokeWidth={0}
            transition="200ms ease-in-out"
            _groupHover={{ fill: 'primary.400' }}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = (props: { item: NavItem; onClose: () => void }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { children, href, label } = props.item;
  const { onClose } = props;

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={NextLink}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
        onClick={!children && onClose}
      >
        <Text color="primary.600" fontWeight="medium">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="primary.600"
            transition="250ms ease-in-out"
            transform={isOpen ? 'rotate(-180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '1rem' }}>
        <Stack spacing={8}>
          {children &&
            children.map((child) => (
              <Box key={child.sectionLabel}>
                <Text
                  color="secondary.500"
                  fontSize="xs"
                  fontWeight="bold"
                  borderBottomWidth={1}
                  borderColor="secondary.500"
                  w="full"
                >
                  {child.sectionLabel}
                </Text>
                <Stack mt={2}>
                  {child.children.map((item) => (
                    <Link
                      as={NextLink}
                      key={item.label}
                      py={2}
                      href={item.href}
                      target={item.isExternal ? '_blank' : '_self'}
                      rel={item.isExternal && 'noreferrer'}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  children?: Array<SubNavItem>;
  href?: string;
  isExternal?: boolean;
}

interface SubNavItem {
  sectionLabel: string;
  children: Array<NavItem>;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Understanding Glioblastoma',
    children: [
      {
        sectionLabel: 'About Glioblastoma',
        children: [
          {
            label: 'Glioblastoma 101',
            href: '/glioblastoma',
          },
          {
            label: 'Symptoms',
            href: '/symptoms',
          },
          {
            label: 'Causes',
            href: '/causes',
          },
          {
            label: 'Diagnosis',
            href: '/diagnosis',
          },
          {
            label: 'Treatment',
            href: '/treatment',
          },
        ],
      },
      {
        sectionLabel: 'Additional Resources',
        children: [
          {
            label: 'American Brain Tumor Association',
            href: 'https://www.abta.org/tumor_types/glioblastoma-gbm/',
            isExternal: true,
          },
          {
            label: 'Mayo Clinic',
            href: 'https://www.mayoclinic.org/diseases-conditions/glioblastoma/cdc-20350148',
            isExternal: true,
          },
          {
            label: 'Cancer Support Community',
            href: 'https://www.cancersupportcommunity.org/coping-brain-tumor',
            isExternal: true,
          },
        ],
      },
    ],
  },
  {
    label: 'Events',
    children: [
      {
        sectionLabel: 'Upcoming events',
        children: [
          {
            label: '2025 Golf Tournament',
            href: 'https://golfforkristin.givesmart.com',
            isExternal: true,
          },
        ],
      },
      {
        sectionLabel: 'Past events',
        children: [
          {
            label: '2024 Golf Tournament',
            href: '/events/2024-golf-tournament',
          },
          {
            label: '2023 Golf Tournament',
            href: '/events/2023-golf-tournament',
          },
        ],
      },
    ],
  },
];
