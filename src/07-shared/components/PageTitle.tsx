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
        fontSize={{ lg: '48px', base: '24px' }}
        lineHeight={{ lg: '100%', base: '133%' }}
        textAlign='center'
        color='#000'
    >
        {title}
    </Heading>
));

// font-family: var(--font-family);
// font-weight: 700;
// font-size: 24px;
// line-height: 133%;
// text-align: center;
// color: #000;
