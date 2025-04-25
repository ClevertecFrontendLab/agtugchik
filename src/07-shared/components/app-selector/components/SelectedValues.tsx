import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
    placeholder: string;
    selectedValues: string[];
    isActivePopover?: boolean;
}

export const SelectedValues = ({
    placeholder,
    selectedValues,
    isActivePopover,
    ...props
}: Props) => (
    <Box flex='1' display='flex' flexWrap='wrap' gap='4px' alignItems='center' {...props}>
        {selectedValues.length && isActivePopover ? (
            selectedValues.map((allergen) => (
                <Box
                    data-test-id='filter-tag'
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
                {placeholder}
            </Box>
        )}
    </Box>
);
