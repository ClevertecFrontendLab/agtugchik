import { Grid } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppGrid = memo(({ children }: Props) => (
    <Grid
        overflow='hidden'
        templateAreas={`"header header"
                            "nav main"`}
        templateColumns='256px 1fr'
        templateRows='min-content 1fr'
        gap='24 0'
    >
        {children}
    </Grid>
));
