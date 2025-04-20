import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';

type AddCustomAllergenProps = {
    customAllergen: string;
    setCustomAllergen: (value: string) => void;
    addCustomAllergen: () => void;
};

export const AddCustomAllergen = ({
    customAllergen,
    setCustomAllergen,
    addCustomAllergen,
}: AddCustomAllergenProps) => (
    <Flex mt='8px' px='14px' pb='8px' align='center' gap='14px'>
        <Input
            value={customAllergen}
            onChange={(e) => setCustomAllergen(e.target.value)}
            placeholder='Добавить свой'
            size='sm'
            borderRadius='4px'
            width='205px'
            height='32px'
            padding='0px 12px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            fontFamily='var(--font-family)'
            fontWeight={400}
            fontSize='14px'
            lineHeight='143%'
            color='#134b00'
            _focus={{ borderColor: '#b1ff2e' }}
        />
        <IconButton
            aria-label='Добавить аллерген'
            icon={<AddIcon boxSize='8px' color='white' />}
            onClick={addCustomAllergen}
            bg='#2db100'
            borderRadius='50%'
            width='12px'
            height='12px'
            minWidth='12px'
            minHeight='12px'
            p='0'
            _hover={{ bg: '#2db100' }}
        />
    </Flex>
);
