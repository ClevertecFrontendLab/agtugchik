import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

import { burgerActiveSelector } from '~/01-app/store/burger-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { AppBreadcrumbs } from '~/05-features';

import { NavigationAccordion, NavigationFooter } from './navigation';

export const BurgerMenu = () => {
    const isOpenBurger = useAppSelector(burgerActiveSelector);
    return (
        <Drawer placement='top' isOpen={isOpenBurger} onClose={() => console.log('close')}>
            <DrawerOverlay mt='64px' />
            <DrawerContent
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
            >
                <AppBreadcrumbs w='100%' p={0} display='flex' flexWrap='wrap' padding='16px 24px' />
                <NavigationAccordion />
                <NavigationFooter />
            </DrawerContent>
        </Drawer>
    );
};
