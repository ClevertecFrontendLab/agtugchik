import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { memo, useState } from 'react';

import { useAppDispatch } from '~/01-app/store/hooks';
import { setSearchBarValue } from '~/01-app/store/search-slice';

export const SearchInput = memo(() => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');

    return (
        <InputGroup maxWidth='458px' width='100%' height='100%'>
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                data-test-id='search-input'
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
                pointerEvents={inputValue.length >= 3 ? 'all' : 'none'}
                height='100%'
                minW={0}
                w={{ lg: '48px', base: '32px' }}
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <IconButton
                    onClick={() => {
                        dispatch(setSearchBarValue(inputValue));
                    }}
                    data-test-id='search-button'
                    aria-label='Поиск'
                    icon={<SearchIcon color='black' boxSize={{ lg: '24px', base: '20px' }} />}
                    variant='unstyled'
                    size='sm'
                    minW='auto'
                    height='auto'
                    p='0'
                />
            </InputRightElement>
        </InputGroup>
    );
});
