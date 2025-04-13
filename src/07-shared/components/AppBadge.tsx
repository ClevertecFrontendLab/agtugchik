import { HStack, Image, Text } from '@chakra-ui/react';

interface Props {
    icon: string;
    label: string;
    bgColor?: string;
}

export const AppBadge = ({ icon, label, bgColor = 'var(--lime150)' }: Props) => (
    <HStack
        borderRadius='4px'
        padding={{ lg: '2px 8px', base: '2px 4px' }}
        height='24px'
        width='max-content'
        background={bgColor}
        spacing={{ lg: '4px', base: '2px' }}
    >
        <Image w='14px' h='14px' src={icon} alt={label} />
        <Text
            fontFamily='var(--font-family)'
            fontWeight='400'
            fontSize='14px'
            lineHeight='143%'
            color='black'
        >
            {label}
        </Text>
    </HStack>
);
