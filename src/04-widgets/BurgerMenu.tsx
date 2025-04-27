import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

import { burgerActiveSelector, toggleBurger } from '~/01-app/store/burger-slice';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import { AppBreadcrumbs } from '~/05-features';

import { NavigationAccordion, NavigationFooter } from './navigation';

export const BurgerMenu = () => {
    const dispatch = useAppDispatch();
    const isOpenBurger = useAppSelector(burgerActiveSelector);

    const onCloseHandler = () => {
        dispatch(toggleBurger());
    };
    return (
        <Drawer
            closeOnOverlayClick={true}
            placement='top'
            isOpen={isOpenBurger}
            onClose={onCloseHandler}
        >
            <DrawerOverlay mt='64px' />
            <DrawerContent
                data-test-id='nav'
                mt='64px'
                ml='auto'
                h='calc(100vh - 64px - 84px)'
                pl='18px'
                pb='32px'
                mr={{ base: '8px', md: '12px' }}
                width='344px'
                maxWidth='100%'
                background='white'
                borderRadius='0 0 16px 16px'
                overflow='hidden'
                sx={{
                    transition: 'none',
                    transform: 'translateX(0) !important',
                }}
            >
                <AppBreadcrumbs
                    w='100%'
                    maxW='100%'
                    p={0}
                    display='flex'
                    flexWrap='wrap'
                    padding='16px 24px'
                    pr='18px'
                />
                <NavigationAccordion />
                <NavigationFooter />
            </DrawerContent>
        </Drawer>
    );
};
