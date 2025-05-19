import { Button, ButtonProps } from '@chakra-ui/react';
import { EmblaCarouselType } from 'embla-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const baseProps: ButtonProps = {
  display: 'inline-flex',
  style: {
    WebkitAppearance: 'none',
    appearance: 'none',
    touchAction: 'manipulation',
  },
};

export const PrevButton = (props: ButtonProps) => {
  return (
    <Button variant="ghost" size="sm" {...{ props, baseProps }}>
      <ArrowLeftIcon size={16} />
    </Button>
  );
};

export const NextButton = (props: ButtonProps) => {
  return (
    <Button variant="ghost" size="sm" {...{ props, baseProps }}>
      <ArrowRightIcon size={16} />
    </Button>
  );
};
