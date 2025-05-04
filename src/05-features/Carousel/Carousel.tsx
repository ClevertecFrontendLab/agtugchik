import 'swiper/css';

import { Box, BoxProps, Portal, useBreakpointValue } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetRecipesQuery } from '~/01-app/query/services/recipes';
import { NewRecipeCard } from '~/06-entites';

import { ArrowButton } from './ui/ArrowButton';

export const Carousel = memo((props: BoxProps) => {
    const { data: newestRecipes } = useGetRecipesQuery({
        page: 1,
        limit: 10,
        sortBy: 'createdAt',
        sortOrder: 'desc',
    });

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
                    loop={(newestRecipes?.data?.length ?? 0) === 10}
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    style={{ width: '100%', overflow: 'visible' }}
                >
                    {(newestRecipes?.data || []).map((recipe, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: cardWidth,
                                minWidth: cardWidth,
                                maxWidth: cardWidth,
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <NewRecipeCard
                                data-test-id={`carousel-card-${index}`}
                                recipe={recipe}
                                index={index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    );
});
