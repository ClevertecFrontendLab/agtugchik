import { GridItem } from '@chakra-ui/react';

import { AppBreadcrumbs } from '~/05-features';
import { User } from '~/06-entites';
import { Logo } from '~/07-shared/components';

export const Header = () => (
    <GridItem
        area='header'
        display='grid'
        as='header'
        w='100%'
        h='80px'
        bg='var(--lime50)'
        gridTemplateAreas={`"logo crumbs user"`}
        gridTemplateColumns='256px 1fr 1fr'
        alignItems='center'
    >
        <Logo gridArea='logo' ml='16px' />
        <AppBreadcrumbs gridArea='crumbs' />
        <User gridArea='user' mr='80px' />
    </GridItem>
);
