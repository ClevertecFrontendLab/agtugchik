import { Grid } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppGrid = memo(({ children }: Props) => (
    <Grid
        overflow='hidden'
        templateAreas={`"header header header"
                            "nav main sider"`}
        templateColumns='min-content 1fr min-content'
        templateRows='min-content 1fr'
        gap='24 0'
    >
        {children}
    </Grid>
));
