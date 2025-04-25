import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import {
    resetFilters,
    searchSliceSelector,
    setExcludeAllergens,
    toggleAllergenValue,
    toggleIsOpenFilterDrawer,
    toggleStartFilter,
} from '~/01-app/store/search-slice';
import sbi from '~/07-shared/assets/svg/search-button-icon.svg';
import { AppButton, AppSelector } from '~/07-shared/components';
import { AppSwitch } from '~/07-shared/components';
import { SearchInput } from '~/07-shared/components';
import allergens from '~/07-shared/consts/alergens';

export const SearchBar = () => {
    const dispatch = useAppDispatch();
    const { alergenFilter, excludeAllergens, startFilter, isOpenFilterDrawer } =
        useAppSelector(searchSliceSelector);

    const filterButtonClickHandler = () => {
        dispatch(toggleIsOpenFilterDrawer());
        dispatch(resetFilters());
    };

    const toggleAllergen = (value: string) => {
        dispatch(toggleAllergenValue(value));
        if (!startFilter) dispatch(toggleStartFilter());
    };

    return (
        <VStack spacing='16px' width='100%'>
            <HStack
                spacing='12px'
                width='100%'
                height={{ lg: '48px', base: '32px' }}
                maxW={{ lg: '518px', base: '448px' }}
            >
                <AppButton
                    onClick={filterButtonClickHandler}
                    data-test-id='filter-button'
                    h='100%'
                    minW={0}
                    w={{ lg: '48px', base: '32px' }}
                >
                    <Image
                        width={{ lg: '24px', base: '14px' }}
                        height={{ lg: '24px', base: '14px' }}
                        src={sbi}
                    />
                </AppButton>
                <SearchInput />
            </HStack>

            <HStack display={{ lg: 'flex', base: 'none' }} spacing='16px'>
                <HStack px='8px' height='36px' width='268px' justify='space-between' flex='1'>
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight={500}
                        fontSize='16px'
                        lineHeight='150%'
                        color='#000'
                    >
                        Исключить мои аллергены
                    </Text>
                    <AppSwitch
                        data-test-id='allergens-switcher'
                        onChange={(e) => dispatch(setExcludeAllergens(e.target.checked))}
                    />
                </HStack>
                <AppSelector
                    isActivePopover={!isOpenFilterDrawer}
                    w='234px'
                    dataTestId='allergens-menu-button'
                    options={allergens}
                    placeholder='Выберите из списка...'
                    toggleValue={toggleAllergen}
                    selectedValues={alergenFilter}
                    isDisabled={!excludeAllergens}
                    withAddValue={isOpenFilterDrawer ? false : true}
                />
            </HStack>
        </VStack>
    );
};
