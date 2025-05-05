import { Box, BoxProps, Spinner } from '@chakra-ui/react';

export const AppSpinner = (props: BoxProps) => (
    <Box
        width='100px'
        height='100px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
        borderRadius='full'
        {...props}
    >
        <Spinner />
    </Box>
);
