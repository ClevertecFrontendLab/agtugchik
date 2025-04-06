import { GridItem } from '@chakra-ui/react';
import { useRoutes } from 'react-router';

import { routes } from './consts/routes';

export const Router = () => {
    const appRoutes = useRoutes(routes);

    return (
        <GridItem as='main' area='main' maxW='calc(100vw - 256px - 280px)'>
            {appRoutes}
        </GridItem>
    );
};
