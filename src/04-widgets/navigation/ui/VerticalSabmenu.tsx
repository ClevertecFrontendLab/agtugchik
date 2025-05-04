import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { getSubcategoryPath } from '~/07-shared/lib';
import { SubCategory } from '~/07-shared/types/api';

interface Props {
    category: string;
    items: SubCategory[];
}

export const VerticalSubmenu = ({ items, category }: Props) => {
    const location = useLocation();
    const activeIndex = items.findIndex((item) =>
        location.pathname.startsWith(getSubcategoryPath(category, item)),
    );

    return (
        <Tabs
            index={activeIndex === -1 ? undefined : activeIndex}
            variant='unstyled'
            orientation='vertical'
        >
            <TabList display='flex' flexDirection='column' alignItems='stretch' paddingTop='8px'>
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const markerWidth = isActive ? 8 : 1;
                    const markerMarginLeft = isActive ? '-7px' : '0';

                    return (
                        <Tab
                            data-test-id={`${item.category}${isActive ? '-active' : ''}`}
                            as={NavLink}
                            key={item.category}
                            to={getSubcategoryPath(category, item)}
                            onClick={(e) => e.stopPropagation()}
                            justifyContent='flex-start'
                            height='36px'
                            paddingLeft='40px'
                            position='relative'
                            _selected={{}}
                            _focus={{ boxShadow: 'none' }}
                            _hover={{}}
                        >
                            <Box
                                width={`${markerWidth}px`}
                                height={isActive ? '28px' : '24px'}
                                background='#c4ff61'
                                borderRadius='2px'
                                marginLeft={markerMarginLeft}
                                flexShrink={0}
                                transform='translateY(1px)'
                            />
                            <Box width='11px' />
                            <Text
                                fontFamily='var(--font-family)'
                                fontWeight={isActive ? 700 : 500}
                                fontSize='16px'
                                lineHeight='150%'
                                color='#000'
                                whiteSpace='nowrap'
                                isTruncated
                            >
                                {item.title}
                            </Text>
                        </Tab>
                    );
                })}
            </TabList>
        </Tabs>
    );
};
