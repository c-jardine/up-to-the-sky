import { Box, Flex } from '@chakra-ui/react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <Box
      gridColumn={{ xl: '4 / span 2' }}
      px={{ base: 0, xl: 4 }}
      maxW="2xl"
      margin="auto"
    >
      <Box overflow="hidden" ref={emblaRef}>
        <Flex ml="calc(1rem*-1)" style={{ touchAction: 'pan-y pinch-zoom' }}>
          {slides.map((element, index) => (
            <Box
              key={index}
              flex="0 0 100%"
              minW={0}
              pl="1rem"
              transform="translate3d(0, 0, 0)"
            >
              {element}
            </Box>
          ))}
        </Flex>
      </Box>

      <Flex mt={2} justifyContent="center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            isSelected={index === selectedIndex}
            style={{
              WebkitAppearance: 'none',
              appearance: 'none',
              touchAction: 'manipulation',
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
