import { ButtonProps, Image } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import toRightArrow from '~/07-shared/assets/svg/to-right-arrow.svg';
import { AppButton } from '~/07-shared/components';

interface Props extends ButtonProps {
    navigateTo: string;
}

const SectionNavigationButton = memo(({ navigateTo, children, ...props }: Props) => {
    const navigate = useNavigate();
    const onCLickHandler = () => {
        navigate(navigateTo);
    };
    return (
        <AppButton
            justifySelf='end'
            width='min-content'
            gridArea='nav-button'
            onClick={onCLickHandler}
            height='48px'
            padding='0 24px'
            buttonType='green'
            gap='8px'
            {...props}
        >
            {children}
            <Image src={toRightArrow} />
        </AppButton>
    );
});

export default SectionNavigationButton;
