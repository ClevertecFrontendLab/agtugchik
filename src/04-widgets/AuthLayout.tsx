import { Box, Flex, Image, Tab, TabList, Tabs } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';
import bg from '~/07-shared/assets/png/auth-bg.png';
import { Logo } from '~/07-shared/ui';

interface Props {
    activeTab: 'login' | 'register';
    children: ReactNode;
}

export const AuthLayout = ({ activeTab, children }: Props) => {
    const navigate = useNavigate();

    const tabStyle = {
        fontFamily: 'var(--font-family)',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '156%',
        padding: '13px 24px',
        borderRadius: 0,
        color: 'var(--lime800)',
        _selected: {
            color: 'var(--lime700)',
            borderBottom: '2px solid var(--lime700)',
        },
    };

    return (
        <Flex background='linear-gradient(208deg, #eaffc7 0%, #29813f 100%)' w='100vw' h='100vh'>
            <Box
                position='absolute'
                bottom='60px'
                left='0'
                width='100vw'
                height='1px'
                backgroundColor='var(--red500)'
                zIndex='banner'
                display={{ xl: 'block', base: 'none' }}
            />
            <Box
                position='absolute'
                bottom='0'
                right='40px'
                width='1px'
                height='100vh'
                backgroundColor='var(--red500)'
                zIndex='banner'
                display={{ xl: 'block', base: 'none' }}
            />
            <Box
                flex='1'
                position='relative'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Box w={{ xl: '461px', lg: '451px', md: '355px', base: '328px' }}>
                    <Logo mb='80px' />
                    <Tabs
                        index={activeTab === 'login' ? 0 : 1}
                        onChange={(index) =>
                            navigate(index === 0 ? AppPaths.LOGIN : AppPaths.REGISTER)
                        }
                        mb='40px'
                    >
                        <TabList gap='16px'>
                            <Tab {...tabStyle}>Вход на сайт</Tab>
                            <Tab {...tabStyle}>Регистрация</Tab>
                        </TabList>
                    </Tabs>

                    <Box>{children}</Box>
                </Box>

                <Box
                    position='absolute'
                    bottom='20px'
                    left='30px'
                    fontFamily='var(--font-family)'
                    fontWeight='600'
                    fontSize='12px'
                    lineHeight='133%'
                    color='#000'
                >
                    Все права защищены, ученический файл, ©Клевер Технолоджик, 2025
                </Box>
            </Box>
            <Box flex='1' position='relative'>
                <Image src={bg} objectFit='cover' w='100%' h='100%' />
                <Box
                    position='absolute'
                    bottom='20px'
                    right='30px'
                    fontFamily='var(--font-family)'
                    fontWeight='600'
                    fontSize='12px'
                    lineHeight='133%'
                    color='#000'
                >
                    - Лучший сервис для ваших кулинарных побед
                </Box>
            </Box>
        </Flex>
    );
};
