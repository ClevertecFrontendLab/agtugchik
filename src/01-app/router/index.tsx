import { GridItem } from '@chakra-ui/react';
import { useRoutes } from 'react-router';

import { routes } from './consts/routes';

export const Router = () => {
    const appRoutes = useRoutes(routes);

    return (
        <GridItem
            as='main'
            area='main'
            w='100%'
            overflow='auto'
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
