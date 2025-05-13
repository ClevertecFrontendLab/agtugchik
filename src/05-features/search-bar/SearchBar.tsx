import { HStack, Image, StackProps, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import {
    resetFilters,
    searchSliceSelector,
    setExcludeAllergens,
    toggleAllergenValue,
    toggleIsOpenFilterDrawer,
} from '~/01-app/store/search-slice';
import sbi from '~/07-shared/assets/svg/search-button-icon.svg';
import allergens from '~/07-shared/consts/alergens';
import { AppButton, AppSelector, AppSwitch, SearchInput } from '~/07-shared/ui';

export const SearchBar = (props: StackProps) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    const dispatch = useAppDispatch();
    const { alergenFilter, excludeAllergens, isOpenFilterDrawer } =
        useAppSelector(searchSliceSelector);

    const filterButtonClickHandler = () => {
        dispatch(toggleIsOpenFilterDrawer());
        dispatch(resetFilters());
    };

    const toggleAllergen = (value: string) => {
        dispatch(toggleAllergenValue(value));
    };

    return (
        <VStack spacing='16px' width='100%' {...props}>
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

            {isDesktop && (
                <HStack spacing='16px'>
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
            )}
        </VStack>
    );
};
