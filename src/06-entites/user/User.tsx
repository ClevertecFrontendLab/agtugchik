import { Avatar } from '@chakra-ui/react';
import { memo } from 'react';

import avatar from '~/07-shared/assets/png/avatar.png';

import styles from './User.module.scss';

export const User = memo(() => (
    <div className={styles.userContainer}>
        <Avatar size='lg' name='Екатерина Константинопольская' src={avatar} />
        <div className={styles.textContainer}>
            <p className={styles.title}>Екатерина Константинопольская</p>
            <p className={styles.subtitle}>@bake_and_pie</p>
        </div>
    </div>
));
