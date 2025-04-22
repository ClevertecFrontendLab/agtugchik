import 'swiper/css';

import { Box, BoxProps, Portal, useBreakpointValue } from '@chakra-ui/react';
import { memo, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewRecipeCard } from '~/06-entites';

import newRecipies from './consts/new-recipies';
import { ArrowButton } from './ui/ArrowButton';

export const Carousel = memo((props: BoxProps) => {
    const cardWidth = useBreakpointValue({
        base: '158px',
        lg: '279px',
        xl: '322px',
    });
    const spaceBetween = useBreakpointValue({ base: 12, xl: 24 });

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <>
            <Portal>
                <ArrowButton
                    data-test-id='carousel-back'
                    arrowDirection='left'
                    aria-label='Prev'
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <ArrowButton
                    data-test-id='carousel-forward'
                    arrowDirection='right'
                    aria-label='Next'
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </Portal>
            <Box
                width='100%'
                maxW='1345px'
                mx='auto'
                overflow='hidden'
                position='relative'
                {...props}
            >
                <Swiper
                    data-test-id='carousel'
                    slidesPerView='auto'
                    spaceBetween={spaceBetween}
                    loop={true}
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    style={{ width: '100%', overflow: 'visible' }}
                >
                    {newRecipies
                        .concat(newRecipies)
                        .concat(newRecipies)
                        .slice(0, 10)
                        .map((recipe, index) => (
                            <SwiperSlide
                                data-test-id={`carousel-card-${index}`}
                                key={index}
                                style={{
                                    width: cardWidth,
                                    minWidth: cardWidth,
                                    maxWidth: cardWidth,
                                    flexShrink: 0,
                                    overflow: 'hidden',
                                }}
                            >
                                <NewRecipeCard {...recipe} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Box>
        </>
    );
});
