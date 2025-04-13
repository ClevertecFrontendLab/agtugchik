import { Box, Button, Image, Text } from '@chakra-ui/react';
import { memo } from 'react';

import exit from '~/07-shared/assets/svg/exit.svg';

export const NavigationFooter = memo(() => (
    <Box display='flex' flexDirection='column' rowGap='16px'>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={500}
            fontSize='12px'
            lineHeight='133%'
            color='rgba(0, 0, 0, 0.24)'
        >
            Версия программы 03.25
        </Text>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={400}
            fontSize='12px'
            lineHeight='133%'
            color='rgba(0, 0, 0, 0.64)'
        >
            Все права защищены,
            <br /> ученический файл,
            <br /> ©Клевер Технолоджи, 2025
        </Text>
        <Button
            leftIcon={<Image src={exit} color='black' />}
            variant='link'
            color='black'
            bg='inherit'
            padding={0}
            borderColor='white !important'
            fontFamily='var(--font-family)'
            fontWeight={600}
            fontSize='12px'
            display='flex'
            justifyContent='start'
            alignItems='center'
            _focus={{ outline: 'none' }}
            _active={{ bg: 'transparent' }}
        >
            Выйти
        </Button>
    </Box>
));
