import { StackProps, VStack } from '@chakra-ui/react';

export const PageLayout = (props: StackProps) => (
    <VStack as='article' w='100%' rowGap='40px' paddingLeft='24px' {...props} />
);
