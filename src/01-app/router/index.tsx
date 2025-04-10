import { GridItem } from '@chakra-ui/react';
import { useRoutes } from 'react-router';

import { routes } from './consts/routes';

export const Router = () => {
    const appRoutes = useRoutes(routes);

    return (
        <GridItem
            as='main'
            area='main'
            maxW={{ lg: 'calc(100vw - 256px - 280px)', base: '100%' }}
            w='100%'
            height={{ lg: 'calc(100vh - 80px)', base: 'calc(100vh - 64px - 84px)' }}
            overflow='scroll'
            sx={{
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            {appRoutes}
        </GridItem>
    );
};
