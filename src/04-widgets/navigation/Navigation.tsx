import { Box, GridItem } from '@chakra-ui/react';
import { memo } from 'react';

import { NavigationFooter } from './UI';
import { NavigationAccordion } from './UI';

export const Navigation = memo(() => (
    <GridItem gridArea='nav'>
        <Box
            width='256px'
            maxHeight='calc(100vh - 80px)'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
            p='34px 0 34px 18px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <NavigationAccordion />
            <NavigationFooter />
        </Box>
    </GridItem>
));
