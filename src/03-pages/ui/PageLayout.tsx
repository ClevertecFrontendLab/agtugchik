import { StackProps, VStack } from '@chakra-ui/react';

export const PageLayout = (props: StackProps) => (
    <VStack
        as='article'
        w='100%'
        spacing={{ lg: '40px', base: '32px' }}
        padding={{ lg: '0 0 0 24px', md: '16px 20px', base: '16px' }}
        {...props}
    />
);
