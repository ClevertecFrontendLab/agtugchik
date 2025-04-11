import { Box, Text, VStack } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

interface Subroute {
    label: string;
    path: string;
}

interface Props {
    items: Readonly<Subroute[]>;
}

export const VerticalSubmenu = ({ items }: Props) => {
    const location = useLocation();

    return (
        <VStack align='stretch' spacing='0' paddingTop='8px'>
            {items.map((item) => {
                const isActive = item.path === location.pathname;
                const markerWidth = isActive ? 8 : 1;
                const markerMarginLeft = isActive ? '-7px' : '0';
                return (
                    <NavLink
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        key={item.path}
                        to={item.path}
                    >
                        <Box
                            display='flex'
                            alignItems='center'
                            height='36px'
                            paddingLeft='40px'
                            position='relative'
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
                                {item.label}
                            </Text>
                        </Box>
                    </NavLink>
                );
            })}
        </VStack>
    );
};
