import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

interface Props extends HeadingProps {
    title: string;
}

export const PageTitle = memo(({ title, ...props }: Props) => (
    <Heading
        as='h1'
        fontFamily='var(--font-family)'
        fontWeight='700'
        fontSize={{ lg: '48px', base: '24px' }}
        lineHeight={{ lg: '100%', base: '133%' }}
        textAlign='center'
        color='#000'
        {...props}
    >
        {title}
    </Heading>
));
