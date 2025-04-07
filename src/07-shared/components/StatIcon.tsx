import { HStack, Image, Text } from '@chakra-ui/react';

interface StatIconProps {
    icon: string;
    count: number;
    type?: 'default' | 'card';
}

export const StatIcon = ({ icon, count, type = 'default' }: StatIconProps) => {
    const isCard = type === 'card';

    return (
        <HStack
            spacing='8px'
            width={isCard ? 'max-content' : '87px'}
            height={isCard ? '24px' : '40px'}
            align='center'
            justify='center'
        >
            <Image src={icon} boxSize={isCard ? '12px' : 'auto'} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize={isCard ? '12px' : '16px'}
                lineHeight={isCard ? '133%' : '150%'}
                color='#2db100'
            >
                {count}
            </Text>
        </HStack>
    );
};
