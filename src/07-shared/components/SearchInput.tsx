import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { memo } from 'react';

export const SearchInput = memo(() => (
    <InputGroup maxWidth='458px' width='100%' height='48px'>
        <Input
            placeholder='Название или ингредиент...'
            border='1px solid rgba(0, 0, 0, 0.48)'
            borderRadius='6px'
            padding='0px 48px 0px 16px'
            backgroundColor='inherit'
            h='100%'
            w='100%'
            fontFamily='var(--font-family)'
            fontWeight='400'
            fontSize='18px'
            color='black'
            _placeholder={{
                fontFamily: 'var(--font-family)',
                fontWeight: '400',
                fontSize: '18px',
                color: '#134b00',
            }}
        />
        <InputRightElement pointerEvents='none' height='100%' mr={15}>
            <SearchIcon color='black' />
        </InputRightElement>
    </InputGroup>
));
