import { GridItem } from '@chakra-ui/react';
import { useRoutes } from 'react-router';

import { routes } from './consts/routes';

export const Router = () => {
    const appRoutes = useRoutes(routes);

    return (
        <GridItem area='main'>
            <main>{appRoutes}</main>
        </GridItem>
    );
};
