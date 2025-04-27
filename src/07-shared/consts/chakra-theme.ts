import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '22.5em', // 360px
    md: '48em', // 768px
    lg: '90em', // 1440px
    xl: '120em', // 1920px
};

const theme = extendTheme({ breakpoints });

export default theme;
