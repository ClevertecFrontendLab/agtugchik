import { Accordion } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

import { AppAccordionItem } from '~/04-widgets/navigation/ui';

import accordionItemProps from '../consts/accordion-item-props';

export const NavigationAccordion = memo(() => {
    const accordionRef = useRef<HTMLDivElement | null>(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const location = useLocation();

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
        const newActiveIndex = accordionItemProps.findIndex(
            (item) => item.path === `/${activePath}`,
        );
        setActiveIndex(newActiveIndex);
    }, [location]);

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
            {accordionItemProps.map((itemProps, index) => (
                <AppAccordionItem key={index} {...itemProps} />
            ))}
        </Accordion>
    );
});
