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
            overflowX='auto'
            overflowY='hidden'
            minW='0'
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
            <Tabs width='100%' variant='unstyled' index={activeIndex} {...props}>
                <TabList display='inline-flex' borderBottom='1px solid rgba(0, 0, 0, 0.08)'>
                    {items.map((item, index) => (
                        <Tab
                            data-test-id={`tab-${item.path.split('/')[2]}-${index}`}
                            as={NavLink}
                            to={item.path}
                            key={item.path}
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
                            width='max-content'
                        >
                            {item.label}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
};
