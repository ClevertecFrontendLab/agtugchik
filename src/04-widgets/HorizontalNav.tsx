import { Tab, TabList, Tabs, TabsProps } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';

import accordionItemProps from './navigation/consts/accordion-item-props';

export const HorizontalNav = (props: Partial<TabsProps>) => {
    const items = accordionItemProps.find((item) => item.path === AppPaths.VEGAN)!.subroutes;
    const location = useLocation();
    const currentPath = location.pathname;
    const activeIndex = items.findIndex((item) => item.path === currentPath);

    return (
        <Tabs
            justifySelf='center'
            width={{ md: 'max-content', base: 'min-content' }}
            index={activeIndex}
            variant='unstyled'
            {...props}
        >
            <TabList borderBottom='1px solid rgba(0, 0, 0, 0.08)'>
                {items.map((item) => (
                    <Tab
                        key={item.path}
                        as={NavLink}
                        to={item.path}
                        _selected={{
                            color: 'var(--lime600)',
                            borderBottom: '2px solid var(--lime600)',
                            fontWeight: 'bold',
                        }}
                        fontFamily='var(--font-family)'
                        fontWeight={500}
                        fontSize={{ lg: '16px', md: '14px', base: '9px' }}
                        lineHeight='150%'
                        textAlign='center'
                        color='var(--lime800)'
                        padding={{ xl: '8px 16px', md: '8px 6px', base: '8px 1px' }}
                    >
                        {item.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
