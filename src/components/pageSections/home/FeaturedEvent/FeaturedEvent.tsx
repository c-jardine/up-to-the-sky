import { Box, Center, Image, Link } from '@chakra-ui/react';
import { EventProps } from '../../../../types';
import { urlForImage } from '../../../../utils';

const FeaturedEvent = (props: EventProps) => {
  return (
    <Center>
      {props.bannerMobile ? (
        <Link
          href={props.eventPage.href}
          target="_blank"
          gridColumn={{ base: '1', md: '1 / span 2' }}
        >
          <Box display={{ base: 'block', md: 'none' }} position="relative">
            <Image
              src={urlForImage(props.bannerMobile).url()}
              alt={`Banner for ${props.name}`}
            />
          </Box>
          <Box
            display={{ base: 'none', md: 'block' }}
            position="relative"
            gridColumn={{ base: '1', md: '1 / span 2' }}
          >
            <Image
              src={urlForImage(props.bannerDesktop).url()}
              alt={`Banner for ${props.name}`}
            />
          </Box>
        </Link>
      ) : (
        <Box position="relative" gridColumn={{ base: '1', md: '1 / span 2' }}>
          <Image
            src={urlForImage(props.bannerDesktop).url()}
            alt={`Banner for ${props.name}`}
          />
        </Box>
      )}
    </Center>
  );
};
export default FeaturedEvent;
