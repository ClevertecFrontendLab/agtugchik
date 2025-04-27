import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import {
    resetFilters,
    searchSliceSelector,
    setExcludeAllergens,
    toggleAllergenValue,
    toggleCategoryValue,
    toggleIsOpenFilterDrawer,
    toggleMeatValue,
    toggleSideDishValue,
    toggleStartFilter,
} from '~/01-app/store/search-slice';
import { AppSelector, AppSwitch } from '~/07-shared/components';

import allergens from '../../07-shared/consts/alergens';
import { CheckboxStack } from './components/CheckBoxStack';
import { CloseButton } from './components/CloseButton';
import { Tags } from './components/Tags';
import categoryNames from './consts/categories';

const sideDishOptions = [
    { name: 'Картошка', dataTestId: 'checkbox-картошка' },
    { name: 'Гречка', dataTestId: '' },
    { name: 'Паста', dataTestId: '' },
    { name: 'Спагетти', dataTestId: '' },
    { name: 'Рис', dataTestId: '' },
    { name: 'Капуста', dataTestId: '' },
    { name: 'Фасоль', dataTestId: '' },
    { name: 'Другие овощи', dataTestId: '' },
];

const meatTypeOptions = [
    { name: 'Курица', dataTestId: '' },
    { name: 'Свинина', dataTestId: '' },
    { name: 'Говядина', dataTestId: '' },
    { name: 'Индейка', dataTestId: '' },
    { name: 'Утка', dataTestId: '' },
];

export const FilterDrawer = () => {
    const dispatch = useAppDispatch();
    const {
        excludeAllergens,
        alergenFilter,
        sideDishFilter,
        meatFilter,
        categoryFilter,
        isActiveFilters,
        isOpenFilterDrawer,
    } = useAppSelector(searchSliceSelector);

    const toggleFilter = (type: 'meat' | 'side' | 'alergen' | 'category', value: string) => {
        if (type === 'alergen') {
            dispatch(toggleAllergenValue(value));
        } else if (type === 'meat') {
            dispatch(toggleMeatValue(value));
        } else if (type === 'side') {
            dispatch(toggleSideDishValue(value));
        } else if (type === 'category') {
            dispatch(toggleCategoryValue(value));
        }
    };
    const onCloseHandler = () => {
        dispatch(toggleIsOpenFilterDrawer());
    };

    const findOnClickHandler = () => {
        dispatch(toggleStartFilter());
    };

    const resetOnClickHandler = () => {
        dispatch(resetFilters());
    };

    return (
        <Drawer
            closeOnOverlayClick={true}
            placement='right'
            onClose={onCloseHandler}
            isOpen={isOpenFilterDrawer}
            size='sm'
        >
            <DrawerOverlay />
            <DrawerContent data-test-id='filter-drawer'>
                <DrawerHeader
                    fontSize='xl'
                    fontWeight='bold'
                    display='flex'
                    justifyContent='space-between'
                >
                    Фильтр
                    <CloseButton
                        aria-label='Close'
                        data-test-id='close-filter-drawer'
                        onClick={onCloseHandler}
                    />
                </DrawerHeader>

                <DrawerBody>
                    <Stack spacing={6}>
                        <AppSelector
                            selectedValues={categoryFilter}
                            toggleValue={toggleFilter.bind(null, 'category')}
                            dataTestId='filter-menu-button-категория'
                            options={categoryNames}
                            placeholder='Категория'
                        />

                        <Input placeholder='Поиск по автору' />

                        <Box>
                            <Text fontWeight='bold' mb={2}>
                                Тип мяса:
                            </Text>
                            <CheckboxStack
                                options={meatTypeOptions}
                                selected={meatFilter}
                                toggleOption={toggleFilter.bind(null, 'meat')}
                            />
                        </Box>

                        <Box>
                            <Text fontWeight='bold' mb={2}>
                                Тип гарнира:
                            </Text>
                            <CheckboxStack
                                options={sideDishOptions}
                                selected={sideDishFilter}
                                toggleOption={toggleFilter.bind(null, 'side')}
                            />
                        </Box>

                        <Box>
                            <Stack direction='row' align='center' mb={2}>
                                <Text fontWeight='bold'>Исключить аллергены</Text>
                                <AppSwitch
                                    data-test-id='allergens-switcher-filter'
                                    onChange={(e) =>
                                        dispatch(setExcludeAllergens(e.target.checked))
                                    }
                                />
                            </Stack>
                            <AppSelector
                                selectedValues={alergenFilter}
                                toggleValue={toggleFilter.bind(null, 'alergen')}
                                withAddValue={true}
                                dataTestId='allergens-menu-button-filter'
                                options={allergens}
                                placeholder='Выберите из списка аллергенов...'
                                isDisabled={!excludeAllergens}
                            />
                        </Box>
                    </Stack>
                </DrawerBody>

                <DrawerFooter
                    gap={4}
                    display='grid'
                    gridTemplateAreas={`"selected-values selected-values"
                            "clear-button find-button"`}
                    gridTemplateColumns='max-content 1fr'
                >
                    <Tags
                        gridArea='selected-values'
                        tagNames={[
                            ...meatFilter,
                            ...sideDishFilter,
                            ...alergenFilter,
                            ...categoryFilter,
                        ]}
                    />
                    <Button
                        onClick={resetOnClickHandler}
                        gridArea='clear-button'
                        data-test-id='clear-filter-button'
                        variant='outline'
                        w='full'
                    >
                        Очистить фильтр
                    </Button>
                    <Button
                        onClick={findOnClickHandler}
                        gridArea='find-button'
                        pointerEvents={isActiveFilters ? 'auto' : 'none'}
                        data-test-id='find-recipe-button'
                        colorScheme='blackAlpha'
                        w='full'
                    >
                        Найти рецепт
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
