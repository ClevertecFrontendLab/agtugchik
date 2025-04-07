import { StackProps, VStack } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props extends StackProps {
    children: ReactNode;
}

export const PageSection = memo(({ children, ...rest }: Props) => (
    <VStack as='section' maxWidth='100%' width='100%' rowGap='24px' {...rest}>
        {children}
    </VStack>
));
