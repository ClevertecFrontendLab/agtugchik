import { Image } from '@chakra-ui/react';

import sbi from '~/07-shared/assets/svg/search-button-icon.svg';
import { AppButton } from '~/07-shared/components/app-button';
import { SearchInput } from '~/07-shared/components/search-input';

import styles from './SearchBar.module.scss';

export const SearchBar = () => (
    <div className={styles.searchBarContainer}>
        <AppButton>
            <Image p='0 12px' src={sbi} />
        </AppButton>
        <SearchInput />
    </div>
);
