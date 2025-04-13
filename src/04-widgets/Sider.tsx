import { Flex } from '@chakra-ui/react';

import { CreateRecipeButton } from '~/05-features';
import { StatsIcons } from '~/05-features/StatsIcons';
import layoutConfig from '~/07-shared/consts/app-layout-config';

export const Sider = () => (
    <Flex
        as='aside'
        position='fixed'
        {...layoutConfig.sider.position}
        zIndex={layoutConfig.sider.zIndex}
        w={layoutConfig.sider.width}
        h={layoutConfig.sider.height}
        display={{ lg: 'flex', base: 'none' }}
        flexDir='column'
        justifyContent='space-between'
        alignItems='end'
    >
        <StatsIcons />
        <CreateRecipeButton />
    </Flex>
);
