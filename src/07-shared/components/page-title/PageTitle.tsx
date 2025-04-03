import styles from './PageTitle.module.scss';

interface Props {
    title: string;
}

export const PageTitle = ({ title }: Props) => <h1 className={styles.pageTitle}>{title}</h1>;
