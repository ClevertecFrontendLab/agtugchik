import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import { memo, useEffect } from 'react';

import { useLazyGetRecipesQuery } from '~/01-app/query/services/recipes';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import {
    searchSliceSelector,
    setActiveRecipes,
    setSearchBarValue,
    setSearchLoading,
} from '~/01-app/store/search-slice';

export const SearchInput = memo((props: InputProps) => {
    const dispatch = useAppDispatch();
    const [fetchRecipes, { data: recipes, isLoading: isLoadingRecipes }] = useLazyGetRecipesQuery();
    const { isActiveSearch, searchBarValue, alergenFilter } = useAppSelector(searchSliceSelector);

    useEffect(() => {
        if (recipes?.data.length) dispatch(setActiveRecipes(recipes.data));
        else dispatch(setActiveRecipes([]));
    }, [dispatch, recipes]);

    useEffect(() => {
        if (isLoadingRecipes) dispatch(setSearchLoading(true));
        else if (!isLoadingRecipes) dispatch(setSearchLoading(false));
    }, [dispatch, isLoadingRecipes]);

    return (
        <InputGroup maxWidth='458px' width='100%' height='100%'>
            <Input
                value={searchBarValue}
                onChange={(e) => {
                    dispatch(setSearchBarValue(e.target.value));
                }}
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
                {...props}
            />
            <InputRightElement
                pointerEvents={isActiveSearch ? 'all' : 'none'}
                height='100%'
                minW={0}
                w={{ lg: '48px', base: '32px' }}
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <IconButton
                    disabled={!isActiveSearch}
                    onClick={() => {
                        fetchRecipes({
                            searchString: searchBarValue ? searchBarValue : undefined,
                            allergens: alergenFilter.length ? alergenFilter.join(',') : undefined,
                        });
                    }}
                    data-test-id='search-button'
                    aria-label='Поиск'
                    icon={<SearchIcon color='black' boxSize={{ lg: '24px', base: '20px' }} />}
                    size='sm'
                    minW='auto'
                    height='auto'
                    p='0'
                />
            </InputRightElement>
        </InputGroup>
    );
});
