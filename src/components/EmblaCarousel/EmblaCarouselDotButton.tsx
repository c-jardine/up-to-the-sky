import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { EmblaCarouselType } from 'embla-carousel';
import React, { useCallback, useEffect, useState } from 'react';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ButtonProps & { isSelected: boolean };

export const DotButton: React.FC<PropType> = (props) => {
  return (
    <Button
      size="sm"
      role="group"
      w={8}
      bg="transparent"
      _hover={{
        bg: 'transparent',
      }}
      p={0}
      {...props}
    >
      <Box
        w={4}
        h={4}
        borderWidth={2}
        borderColor={props.isSelected ? 'primary.500' : 'blackAlpha.300'}
        bg={props.isSelected ? 'primary.500' : 'transparent'}
        rounded="full"
        transition="150ms ease-in-out"
        _groupHover={{
          bg: props.isSelected ? 'primary.400' : 'blackAlpha.500',
          borderColor: props.isSelected ? 'primary.400' : 'blackAlpha.100',
        }}
      ></Box>
    </Button>
  );
};
