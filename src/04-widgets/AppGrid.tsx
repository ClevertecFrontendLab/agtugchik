import { Grid } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppGrid = memo(({ children }: Props) => (
    <Grid
        height='100vh'
        overflow='hidden'
        templateAreas={{
            lg: `"header header header"
                "nav main sider"`,
            base: `"header"
                "main"
                "footer"`,
        }}
        templateColumns={{ lg: 'min-content 1fr min-content', base: '1fr' }}
        templateRows={{ lg: 'min-content 1fr', base: 'min-content 1fr min-content' }}
    >
        {children}
    </Grid>
));
