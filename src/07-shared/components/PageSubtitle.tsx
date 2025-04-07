import { Text, TextProps } from '@chakra-ui/react';
import { memo } from 'react';

interface Props extends TextProps {
    subtitle: string;
}

export const PageSubtitle = memo(({ subtitle, ...rest }: Props) => (
    <Text
        maxW='696px'
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize='16px'
        lineHeight='150%'
        textAlign='center'
        color='rgba(0, 0, 0, 0.48)'
        {...rest}
    >
        {subtitle}
    </Text>
));
