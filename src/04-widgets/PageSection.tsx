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
    >
        {children}
    </Grid>
));
