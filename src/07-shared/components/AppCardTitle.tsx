import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppCardTitle = memo((props: HeadingProps) => (
    <Heading
        as='h3'
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize='20px'
        lineHeight='140%'
        color='#000'
        mb='8px'
        w='100%'
        isTruncated
        {...props}
    />
));
