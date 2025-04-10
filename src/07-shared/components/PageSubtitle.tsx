import { Text, TextProps } from '@chakra-ui/react';
import { memo } from 'react';

interface Props extends TextProps {
    subtitle: string;
}

export const PageSubtitle = memo(({ subtitle, ...rest }: Props) => (
    <Text
        maxW={{ lg: '696px', base: '100%' }}
        w='100%'
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize={{ lg: '16px', base: '14px' }}
        lineHeight={{ lg: '150%', base: '143%' }}
        textAlign='center'
        color='rgba(0, 0, 0, 0.48)'
        {...rest}
    >
        {subtitle}
    </Text>
));
