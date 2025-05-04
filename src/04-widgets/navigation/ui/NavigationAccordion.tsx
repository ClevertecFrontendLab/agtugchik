import { Accordion } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { AppAccordionItem } from '~/04-widgets/navigation/ui';

export const NavigationAccordion = memo(() => {
    const { data: cat } = useGetCategoriesQuery();
    const accordionRef = useRef<HTMLDivElement | null>(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const location = useLocation();
    const categories = (cat || []).filter((c) => c.icon);

    useEffect(() => {
        const checkScrollbar = () => {
            if (accordionRef.current) {
                const { scrollHeight, clientHeight } = accordionRef.current;
                setHasScrollbar(scrollHeight > clientHeight);
            }
        };
        checkScrollbar();
        const resizeObserver = new ResizeObserver(checkScrollbar);
        if (accordionRef.current) {
            resizeObserver.observe(accordionRef.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const activePath = location.pathname.split('/')[1];
        const newActiveIndex = categories.findIndex((category) => category.category === activePath);
        setActiveIndex(newActiveIndex);
    }, [location, categories]);

    return (
        <Accordion
            ref={accordionRef}
            index={activeIndex}
            allowToggle
            overflowX='hidden'
            overflowY='auto'
            pr={hasScrollbar ? 1 : 0}
            mr={hasScrollbar ? 1 : 4}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
            }}
        >
            {categories.map((category) => (
                <AppAccordionItem key={category._id} {...category} />
            ))}
        </Accordion>
    );
});
