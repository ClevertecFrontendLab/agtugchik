import { SearchBar } from '~/05-features/search-bar/SearchBar';
import { AppSwitch } from '~/07-shared/components/app-switch';
import { PageSubtitle } from '~/07-shared/components/page-subtitle';
import { PageTitle } from '~/07-shared/components/page-title';

import styles from './PageHeader.module.scss';

interface Props {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: Props) => (
    <div className={styles.pageHeaderContainer}>
        <PageTitle title={title} />
        {subtitle && <PageSubtitle subtitle={subtitle} />}
        <SearchBar />
        <AppSwitch />
    </div>
);
