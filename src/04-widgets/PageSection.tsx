import { StackProps, VStack } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props extends StackProps {
    children: ReactNode;
}

export const PageSection = memo(({ children, ...rest }: Props) => (
    <VStack
        as='section'
        maxWidth='100%'
        width='100%'
        rowGap='24px'
        {...rest}
        display='grid'
        gridTemplateAreas={`"hor-nav hor-nav"
                            "title nav-button"
                            "content content"
                            "more-button more-button"`}
    >
        {children}
    </VStack>
));
