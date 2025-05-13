import { ButtonProps, Image } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import toRightArrow from '~/07-shared/assets/svg/to-right-arrow.svg';
import { AppButton } from '~/07-shared/ui';

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
            justifySelf={{ lg: 'end', base: 'center' }}
            width='min-content'
            onClick={onCLickHandler}
            height={{ xl: '48px', base: '40px' }}
            padding={{ xl: '0 24px', base: '0 16px' }}
            buttonType='green'
            gap='8px'
            fontSize={{ xl: '18px', base: '16px' }}
            {...props}
        >
            {children}
            <Image src={toRightArrow} />
        </AppButton>
    );
});

export default SectionNavigationButton;
