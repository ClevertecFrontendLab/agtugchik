import { Button, Image } from '@chakra-ui/react';
import { memo } from 'react';

import exit from '~/07-shared/assets/svg/exit.svg';

import styles from './NavigationFooter.module.scss';

const NavigationFooter = memo(() => (
    <div className={styles.navigationFooterContainer}>
        <p className={styles.version}>Версия программы 03.25</p>
        <p className={styles.rights}>
            Все права защищены,
            <br /> ученический файл,
            <br /> ©Клевер Технолоджи, 2025
        </p>
        <Button
            leftIcon={<Image src={exit} color='black' />}
            variant='link'
            color='black'
            bg='inherit'
            padding={0}
            borderColor='white !important'
            fontFamily='var(--font-family)'
            fontWeight={600}
            fontSize={12}
            display='flex'
            justifyContent='start'
            alignItems='center'
            _focus={{ outline: 'none' }}
            _active={{ bg: 'transparent' }}
        >
            Выйти
        </Button>
    </div>
));

export default NavigationFooter;
