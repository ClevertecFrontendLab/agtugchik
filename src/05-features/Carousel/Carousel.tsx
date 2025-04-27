import 'swiper/css';

import { Box, BoxProps, Portal, useBreakpointValue } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewRecipeCard } from '~/06-entites';
import recipes from '~/07-shared/consts/mockRecipes';

import { ArrowButton } from './ui/ArrowButton';

export const Carousel = memo((props: BoxProps) => {
    const navigate = useNavigate();
    const cardWidth = useBreakpointValue({
        base: '158px',
        lg: '279px',
        xl: '322px',
    });
    const spaceBetween = useBreakpointValue({ base: 12, xl: 24 });

    const swiperRef = useRef<SwiperType | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const [position, setPosition] = useState<{ top: number; left: number; right: number }>({
        top: 0,
        left: 0,
        right: 0,
    });

    const updatePosition = () => {
        if (carouselRef.current) {
            const rect = carouselRef.current.getBoundingClientRect();
            setPosition({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                right: document.documentElement.clientWidth - rect.right + window.scrollX,
            });
        }
    };

    useEffect(() => {
        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, []);

    return (
        <>
            <Portal>
                <ArrowButton
                    data-test-id='carousel-back'
                    arrowDirection='left'
                    aria-label='Prev'
                    top={position.top + 147}
                    left={position.left - 8}
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <ArrowButton
                    data-test-id='carousel-forward'
                    arrowDirection='right'
                    aria-label='Next'
                    top={position.top + 147}
                    right={position.right - 8}
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </Portal>
            <Box
                ref={carouselRef}
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
                    {recipes
                        .concat(recipes)
                        .slice(0, 10)
                        .map((recipe, index) => (
                            <SwiperSlide
                                onClick={() => {
                                    navigate(
                                        `/${recipe.category[0]}/${recipe.subcategory[0]}/${recipe.id}`,
                                    );
                                }}
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
                                <NewRecipeCard recipe={recipe} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Box>
        </>
    );
});
