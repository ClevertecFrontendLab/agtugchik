import { Accordion, GridItem } from '@chakra-ui/react';
import { memo, useEffect, useRef, useState } from 'react';

import { AppAccordionItem } from '~/04-widgets/navigation/UI/AppAccordionItem';

import props from './consts/accordion-item-props';
import styles from './Navigation.module.scss';
import NavigationFooter from './UI/NavigationFooter/NavigationFooter';

export const Navigation = memo(() => {
    const accordionRef = useRef(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);

    const checkScrollbar = () => {
        if (accordionRef.current) {
            const { scrollHeight, clientHeight } = accordionRef.current;
            setHasScrollbar(scrollHeight > clientHeight);
        }
    };

    useEffect(() => {
        checkScrollbar();

        const resizeObserver = new ResizeObserver(() => {
            checkScrollbar();
        });

        if (accordionRef.current) {
            resizeObserver.observe(accordionRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <GridItem gridArea='nav'>
            <nav className={styles.navContainer}>
                <Accordion
                    ref={accordionRef}
                    allowToggle
                    overflow='auto'
                    marginRight={hasScrollbar ? 4 : 16}
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '8px',
                            borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f5f5f5',
                            borderRadius: '8px',
                            padding: '0 4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: '8px',
                        },
                    }}
                >
                    {props.map((itemProps, index) => (
                        <AppAccordionItem key={index} props={itemProps} />
                    ))}
                </Accordion>
                <NavigationFooter />
            </nav>
        </GridItem>
    );
});
