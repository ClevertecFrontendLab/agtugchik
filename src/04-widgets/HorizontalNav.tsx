import { Box, Tab, TabList, Tabs, TabsProps } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { getSubcategoryPath } from '~/07-shared/lib';
import { SubCategory } from '~/07-shared/types/api';

interface Props extends Partial<TabsProps> {
    category: string;
    items: SubCategory[];
}

export const HorizontalNav = ({ category, items, ...props }: Props) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const activeIndex = items.findIndex(
        (item) => getSubcategoryPath(category, item.category) === currentPath,
    );

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
                            data-test-id={`tab-${item.category}-${index}`}
                            as={NavLink}
                            to={getSubcategoryPath(category, item.category)}
                            key={getSubcategoryPath(category, item.category)}
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
                            {item.title}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
};
