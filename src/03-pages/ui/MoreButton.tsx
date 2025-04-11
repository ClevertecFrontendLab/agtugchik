import { ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';

import { AppButton } from '~/07-shared/components';

export const MoreButton = memo((props: ButtonProps) => (
    <AppButton
        gridArea='more-button'
        buttonType='green'
        w='min-content'
        padding='0 16px'
        margin='0 auto'
        {...props}
    >
        Загрузить еще
    </AppButton>
));
