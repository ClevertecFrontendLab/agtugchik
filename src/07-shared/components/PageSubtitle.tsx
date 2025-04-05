import { Text } from '@chakra-ui/react';
import { memo } from 'react';

interface Props {
    subtitle: string;
}

export const PageSubtitle = memo(({ subtitle }: Props) => (
    <Text
        fontFamily='var(--font-family)'
        fontWeight={500}
        fontSize='16px'
        lineHeight='150%'
        textAlign='center'
        color='rgba(0, 0, 0, 0.48)'
    >
        {subtitle}
    </Text>
));
