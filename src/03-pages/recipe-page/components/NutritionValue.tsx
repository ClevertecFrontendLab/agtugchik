import { Stack, Text, VStack } from '@chakra-ui/react';

import { ValueBox } from './ValueBox';

interface Props {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export const NutritionValues = ({ calories, proteins, fats, carbohydrates }: Props) => (
    <VStack alignItems='start' w={{ md: 'max-content', base: '100%' }}>
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
        <Stack spacing='24px' flexDirection={{ md: 'row', base: 'column' }} width='100%'>
            <ValueBox title='калорийность' value={calories} unit='ККАЛ' />
            <ValueBox title='белки' value={proteins} unit='ГРАММ' />
            <ValueBox title='жиры' value={fats} unit='ГРАММ' />
            <ValueBox title='углеводы' value={carbohydrates} unit='ГРАММ' />
        </Stack>
    </VStack>
);
