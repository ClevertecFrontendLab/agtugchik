import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

interface Props extends HeadingProps {
    title: string;
}

export const SectionTitle = memo(({ title, ...rest }: Props) => (
    <Heading
        gridArea='title'
        w='100%'
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize='48px'
        lineHeight='100%'
        textAlign='left'
        color='#000'
        {...rest}
    >
        {title}
    </Heading>
));
