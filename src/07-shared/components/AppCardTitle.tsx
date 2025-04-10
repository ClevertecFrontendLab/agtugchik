import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppCardTitle = memo((props: HeadingProps) => (
    <Heading
        as='h3'
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize={{ lg: '20px', base: '16px' }}
        lineHeight={{ lg: '140%', base: '150%' }}
        color='#000'
        mb='8px'
        w='100%'
        noOfLines={{ lg: 1, base: 2 }}
        sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: { lg: '2.8em', base: '3em' },
        }}
        {...props}
    />
));
