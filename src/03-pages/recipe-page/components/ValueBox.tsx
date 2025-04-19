import { Text, VStack } from '@chakra-ui/react';

interface ValueBoxProps {
    title: string;
    value: number;
    unit: string;
}
export const ValueBox = ({ title, value, unit }: ValueBoxProps) => (
    <VStack
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='16px'
        padding='16px'
        width='149px'
        height='136px'
        justifyContent='space-around'
    >
        <Text
            fontFamily='var(--font-family)'
            fontWeight={400}
            fontSize='14px'
            lineHeight='143%'
            textAlign='center'
            color='rgba(0, 0, 0, 0.48)'
        >
            {title}
        </Text>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={500}
            fontSize='36px'
            lineHeight='111%'
            textAlign='center'
            color='#134b00'
        >
            {value}
        </Text>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={600}
            fontSize='14px'
            lineHeight='143%'
            textAlign='center'
            color='rgba(0, 0, 0, 0.92)'
        >
            {unit}
        </Text>
    </VStack>
);
