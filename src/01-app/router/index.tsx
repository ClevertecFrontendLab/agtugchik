import { Box } from '@chakra-ui/react';
import { useRoutes } from 'react-router';

import { routes } from './consts/routes';

export const Router = () => {
    const appRoutes = useRoutes(routes);

    return (
        <Box as='main' w='100%'>
            {appRoutes}
        </Box>
    );
};
