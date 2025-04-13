import { Box, Tab, TabList, Tabs, TabsProps } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';

import accordionItemProps from './navigation/consts/accordion-item-props';

export const HorizontalNav = (props: Partial<TabsProps>) => {
    const items = accordionItemProps.find((item) => item.path === AppPaths.VEGAN)!.subroutes;
    const location = useLocation();
    const currentPath = location.pathname;
    const activeIndex = items.findIndex((item) => item.path === currentPath);

    return (
        <Box
            maxWidth='100%'
            overflow='auto'
            sx={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                '&': {
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                },
            }}
        >
            <Tabs
                justifySelf='center'
                width='max-content'
                index={activeIndex}
                variant='unstyled'
                {...props}
            >
                <TabList borderBottom='1px solid rgba(0, 0, 0, 0.08)'>
                    {items.map((item) => (
                        <Tab
                            width='max-content'
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
                            fontSize={{ lg: '16px', base: '14px' }}
                            lineHeight={{ lg: '150%', base: '143%' }}
                            textAlign='center'
                            color='var(--lime800)'
                            padding={{ lg: '8px 16px', base: '4px 16px' }}
                        >
                            {item.label}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
};
