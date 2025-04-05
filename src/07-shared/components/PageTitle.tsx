import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

interface Props {
    title: string;
}

export const PageTitle = memo(({ title }: Props) => (
    <Heading
        as='h1'
        fontFamily='var(--font-family)'
        fontWeight='700'
        fontSize='48px'
        lineHeight='100%'
        textAlign='center'
        color='#000'
    >
        {title}
    </Heading>
));
