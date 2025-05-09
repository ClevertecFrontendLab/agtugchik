import { EditIcon, SearchIcon } from '@chakra-ui/icons';
import { Image, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { AppPaths } from '~/01-app/router/consts/app-paths';
import avatar from '~/07-shared/assets/png/avatar.png';
import home from '~/07-shared/assets/svg/home-button.svg';

interface ButtonItem {
    label: string;
    icon: ReactElement;
    path: string;
}

const buttonProps: ButtonItem[] = [
    { label: 'Главная', icon: <Image src={home} w='40px' h='40px' />, path: AppPaths.HOME },
    {
        label: 'Поиск',
        icon: (
            <Stack w='40px' h='40px' align='center' justify='center'>
                <SearchIcon />
            </Stack>
        ),
        path: '',
    },
    {
        label: 'Записать',
        icon: (
            <Stack w='40px' h='40px' align='center' justify='center'>
                <EditIcon />
            </Stack>
        ),
        path: '',
    },
    { label: 'Мой профиль', icon: <Image src={avatar} w='40px' h='40px' />, path: '' },
];

export default buttonProps;
