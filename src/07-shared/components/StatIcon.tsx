import { HStack, Image, StackProps, Text } from '@chakra-ui/react';

interface StatIconProps extends StackProps {
    icon: string;
    count: number;
    type?: 'default' | 'card';
}

export const StatIcon = ({ icon, count, type = 'default', ...props }: StatIconProps) => {
    const isCard = type === 'card';

    return (
        <HStack
            spacing='8px'
            width={isCard ? 'max-content' : { lg: '87px', base: 'max-content' }}
            height={isCard ? '24px' : '40px'}
            align='center'
            justify='center'
            {...props}
        >
            <Image src={icon} boxSize={isCard ? '12px' : { lg: '16px', base: '12px' }} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize={isCard ? '12px' : { lg: '16px', base: '12px' }}
                lineHeight={isCard ? '133%' : '150%'}
                color='#2db100'
            >
                {count}
            </Text>
        </HStack>
    );
};
