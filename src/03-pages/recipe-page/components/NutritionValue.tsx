import { HStack, Text, VStack } from '@chakra-ui/react';

import { ValueBox } from './ValueBox';

interface Props {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export const NutritionValues = ({ calories, proteins, fats, carbohydrates }: Props) => (
    <VStack alignItems='start'>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={400}
            fontSize='14px'
            lineHeight='143%'
            textAlign='center'
            color='rgba(0, 0, 0, 0.8)'
        >
            * Калорийность на 1 порцию
        </Text>
        <HStack spacing='24px'>
            <ValueBox title='калорийность' value={calories} unit='ККАЛ' />
            <ValueBox title='белки' value={proteins} unit='ГРАММ' />
            <ValueBox title='жиры' value={fats} unit='ГРАММ' />
            <ValueBox title='углеводы' value={carbohydrates} unit='ГРАММ' />
        </HStack>
    </VStack>
);
