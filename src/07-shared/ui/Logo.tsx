import { HStack, Image, StackProps } from '@chakra-ui/react';
import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';
import logo1 from '~/07-shared/assets/svg/logo1.svg';
import logo2 from '~/07-shared/assets/svg/logo2.svg';

export const Logo = memo((props: StackProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandler = () => {
        navigate(AppPaths.HOME);
    };

    return (
        <>
            {AppPaths.LOGIN === location.pathname || AppPaths.REGISTER === location.pathname ? (
                <HStack
                    gap={{ lg: '14px', base: '8px' }}
                    alignItems='end'
                    w='max-content'
                    m='0 auto'
                    {...props}
                >
                    <Image w={{ lg: '64px', base: '38px' }} src={logo1} />
                    <Image w={{ lg: '193px', base: '112px' }} src={logo2} />
                </HStack>
            ) : (
                <HStack onClick={onClickHandler} columnGap='7px' alignItems='end' {...props}>
                    <Image src={logo1} alt='Logo 1' />
                    <Image display={{ md: 'block', base: 'none' }} src={logo2} alt='Logo 2' />
                </HStack>
            )}
        </>
    );
});
