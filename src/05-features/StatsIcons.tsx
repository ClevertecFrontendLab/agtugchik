import { Stack, StackProps } from '@chakra-ui/react';

import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import heartEyes from '~/07-shared/assets/svg/heart-eyes.svg';
import users from '~/07-shared/assets/svg/users.svg';
import { StatIcon } from '~/07-shared/components';

export const StatsIcons = (props: StackProps) => (
    <Stack spacing='24px' width='208px' height='200px' align='center' justify='center' {...props}>
        <StatIcon icon={bookmark} count={185} />
        <StatIcon icon={users} count={589} />
        <StatIcon icon={heartEyes} count={587} />
    </Stack>
);
