import { Grid } from '@chakra-ui/react';

import { burgerActiveSelector, toggleBurger } from '~/01-app/store/burger-slice';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import { AppBreadcrumbs } from '~/05-features';
import { StatsIcons } from '~/05-features/StatsIcons';
import { User } from '~/06-entites';
import { BurgerButton, Logo } from '~/07-shared/components';
import layoutConfig from '~/07-shared/consts/app-layout-config';

export const Header = () => {
    const dispatch = useAppDispatch();
    const isOpenBurger = useAppSelector(burgerActiveSelector);

    const burgerButtonClickHandler = () => {
        dispatch(toggleBurger());
    };

    return (
        <Grid
            zIndex={1401}
            data-test-id='header'
            as='header'
            position='fixed'
            top={layoutConfig.header.position.top}
            left={0}
            w='100%'
            h={{ lg: layoutConfig.header.height.lg, base: layoutConfig.header.height.base }}
            px='16px'
            bg={isOpenBurger ? '#fff' : 'var(--lime50)'}
            templateAreas={{
                lg: `"logo crumbs user"`,
                base: `"logo stat burger"`,
            }}
            templateColumns={{
                lg: '256px 1fr 1fr',
                base: '1fr min-content min-content',
            }}
            alignItems='center'
        >
            <Logo gridArea='logo' />
            <AppBreadcrumbs gridArea='crumbs' display={{ lg: 'block', base: 'none' }} />
            <User gridArea='user' mr='64px' />
            <StatsIcons
                display={isOpenBurger ? 'none' : { lg: 'none', base: 'flex' }}
                flexDirection={{ base: 'row' }}
                w='min-content'
                h='min-content'
                spacing='16px'
            />
            <BurgerButton
                isOpen={isOpenBurger}
                onClick={burgerButtonClickHandler}
                display={{ lg: 'none', base: 'flex' }}
            />
        </Grid>
    );
};
