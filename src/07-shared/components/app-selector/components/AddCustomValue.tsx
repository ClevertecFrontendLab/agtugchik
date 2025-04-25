import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';

interface Props {
    customValue: string;
    setCustomValue: (value: string) => void;
    addCustomValue: () => void;
}

export const AddCustomValue = ({ customValue, setCustomValue, addCustomValue }: Props) => {
    const handleSubmit = (e: React.FormEvent) => {
        // console.log('handleSubmit');
        e.preventDefault();
        addCustomValue();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex mt='8px' px='14px' pb='8px' align='center' gap='14px'>
                <Input
                    data-test-id='add-other-allergen'
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
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
                    type='submit'
                    data-test-id='add-allergen-button'
                    aria-label='Добавить аллерген'
                    icon={<AddIcon boxSize='8px' color='white' />}
                    bg='#2db100'
                    borderRadius='50%'
                    width='40px'
                    height='40px'
                    minWidth='12px'
                    minHeight='12px'
                    p='0'
                    _hover={{ bg: '#2db100' }}
                />
            </Flex>
        </form>
    );
};
