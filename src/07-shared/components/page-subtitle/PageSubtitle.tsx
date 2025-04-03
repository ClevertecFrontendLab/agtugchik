import styles from './PageSubtitle.module.scss';

interface Props {
    subtitle: string;
}

export const PageSubtitle = ({ subtitle }: Props) => (
    <p className={styles.pageSubtitle}>{subtitle}</p>
);
