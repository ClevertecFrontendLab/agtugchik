import { GridItem } from '@chakra-ui/react';

import { CreateRecipeButton } from '~/05-features';
import { StatsIcons } from '~/05-features/StatsIcons';

export const Sider = () => (
    <GridItem
        area='sider'
        w='280px'
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        alignItems='end'
    >
        <StatsIcons />
        <CreateRecipeButton />
    </GridItem>
);
