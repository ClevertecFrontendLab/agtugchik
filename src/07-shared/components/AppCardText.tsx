import { Text, TextProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppCardText = memo((props: TextProps) => (
    <Text
        fontFamily='var(--font-family)'
        fontWeight={400}
        fontSize='14px'
        lineHeight='143%'
        color='#000'
        sx={{
            display: ['none', 'none', 'none', 'none', '-webkit-box'],
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        }}
        {...props}
    />
));
