import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import router from 'next/router';
import hero from '../../../../../public/images/caring-hands-holding.jpg';
import { OffCenterCardOverlay } from '../../../OffCenterCardOverlay';

const HomeHero = () => {
  return (
    <OffCenterCardOverlay
      card={{
        heading: 'In loving memory of Kristin Renee Cantrell Hill',
        content: (
          <>
            <Text
              color="primary.500"
              fontSize="lg"
              fontWeight="semibold"
              letterSpacing="wide"
              mt={4}
            >
              Donate to Kristin&apos; Endowment Fund at the Atrium Medical
              Center Foundation today!
            </Text>
            <HStack mt={8}>
              <Button
                variant="primary"
                flexBasis="50%"
                onClick={() => void router.push('/glioblastoma')}
              >
                Learn more <Icon as={ChevronRightIcon} boxSize={5} ml={2} />
              </Button>
              <Button
                as="a"
                href="https://e.givesmart.com/events/sIm/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                flexBasis="50%"
              >
                Donate <Icon as={ExternalLinkIcon} boxSize={5} ml={2} />
              </Button>
            </HStack>
          </>
        ),
      }}
      image={{
        src: hero,
        alt: "Two people embracing each other's hands.",
      }}
    />
  );
};

export default HomeHero;
