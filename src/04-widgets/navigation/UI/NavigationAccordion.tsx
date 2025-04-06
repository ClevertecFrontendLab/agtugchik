import { Accordion } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';

import { AppAccordionItem } from '~/04-widgets/navigation/UI';

import props from '../consts/accordion-item-props';

export const NavigationAccordion = memo(() => {
    const accordionRef = useRef<HTMLDivElement | null>(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);

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

    return (
        <Accordion
            ref={accordionRef}
            allowToggle
            overflow='auto'
            pr={hasScrollbar ? 1 : 0}
            mr={hasScrollbar ? 1 : 4}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
            }}
        >
            {props.map((itemProps, index) => (
                <AppAccordionItem key={index} props={itemProps} />
            ))}
        </Accordion>
    );
});
