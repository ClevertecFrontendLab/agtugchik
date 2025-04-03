import { GridItem } from '@chakra-ui/react';
import { memo } from 'react';

import { User } from '~/06-entites/user';
import { Logo } from '~/07-shared/components/logo';

import styles from './Header.module.scss';

export const Header = memo(() => (
    <GridItem area='header'>
        <header className={styles.headerContainer}>
            <Logo />
            <User />
        </header>
    </GridItem>
));
