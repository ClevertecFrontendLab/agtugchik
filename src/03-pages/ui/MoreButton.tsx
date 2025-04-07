import { memo } from 'react';

import { AppButton } from '~/07-shared/components';

export const MoreButton = memo(() => (
    <AppButton
        gridArea='more-button'
        buttonType='green'
        w='min-content'
        padding='0 16px'
        margin='0 auto'
    >
        Загрузить еще
    </AppButton>
));
