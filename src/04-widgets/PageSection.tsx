import { Grid, StackProps } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props extends StackProps {
    children: ReactNode;
}

export const PageSection = memo(({ children, ...rest }: Props) => (
    <Grid
        as='section'
        maxWidth='100%'
        width='100%'
        rowGap={{ xl: '24px', lg: '16px', base: '12px' }}
        {...rest}
        // display='grid'
        // gridTemplateAreas={{
        //     lg: `"hor-nav hor-nav"
        //         "title nav-button"
        //         "content content"
        //         "more-button more-button"`,
        //     base: `"hor-nav"
        //         "title"
        //         "content"
        //         "nav-button"
        //         "more-button"`,
        // }}
        // gridTemplateColumns={{ lg: '1fr 1fr', base: '1fr' }}
        // gridTemplateRows={{ lg: 'repeat(4, min-content)', base: 'repeat(5, min-content)' }}
    >
        {children}
    </Grid>
));
