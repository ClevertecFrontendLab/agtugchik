import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { memo } from 'react';

export const SearchInput = memo(() => (
    <InputGroup maxWidth='458px' width='100%' height='100%'>
        <Input
            placeholder='Название или ингредиент...'
            border='1px solid rgba(0, 0, 0, 0.48)'
            borderRadius='6px'
            padding={{ lg: '0px 48px 0px 16px', base: '0px 32px 0px 16px' }}
            backgroundColor='inherit'
            h='100%'
            w='100%'
            fontFamily='var(--font-family)'
            fontWeight='400'
            fontSize={{ lg: '18px', base: '14px' }}
            color='black'
            _placeholder={{ color: 'var(--lime800)' }}
        />
        <InputRightElement
            pointerEvents='none'
            height='100%'
            minW={0}
            w={{ lg: '48px', base: '32px' }}
        >
            <SearchIcon color='black' />
        </InputRightElement>
    </InputGroup>
));
