import { HStack, Image, StackProps } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { AppPaths } from '~/01-app';
import logo1 from '~/07-shared/assets/svg/logo1.svg';
import logo2 from '~/07-shared/assets/svg/logo2.svg';

export const Logo = memo((props: StackProps) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(AppPaths.HOME);
    };

    return (
        <HStack onClick={onClickHandler} columnGap='7px' alignItems='end' {...props}>
            <Image src={logo1} alt='Logo 1' />
            <Image display={{ md: 'block', base: 'none' }} src={logo2} alt='Logo 2' />
        </HStack>
    );
});
