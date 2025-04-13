import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '360px',
    md: '768px',
    lg: '1440px',
    xl: '1920px',
};
const theme = extendTheme({ breakpoints });

export default theme;
