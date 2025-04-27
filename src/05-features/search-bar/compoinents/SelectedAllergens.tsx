import { Box } from '@chakra-ui/react';

type SelectedAllergensProps = {
    selectedAllergens: string[];
};

export const SelectedAllergens = ({ selectedAllergens }: SelectedAllergensProps) => (
    <Box flex='1' display='flex' flexWrap='wrap' gap='4px' alignItems='center'>
        {selectedAllergens.length ? (
            selectedAllergens.map((allergen) => (
                <Box
                    key={allergen}
                    border='1px solid #b1ff2e'
                    borderRadius='6px'
                    px='8px'
                    py='2px'
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize='12px'
                    lineHeight='133%'
                    color='#2db100'
                    display='flex'
                    alignItems='center'
                >
                    {allergen}
                </Box>
            ))
        ) : (
            <Box color='gray.500' fontSize='14px'>
                Выберите из списка...
            </Box>
        )}
    </Box>
);
