import { Outlet } from 'react-router';

import { HorizontalNav, PageHeader, PageSection } from '~/04-widgets';
import { PageFooter } from '~/04-widgets/page-footer/PageFooter';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

const page = {
    title: 'Веганская кухня',
    subtitle:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
};

export const VeganPage = () => (
    <PageLayout>
        <PageHeader title={page.title} subtitle={page.subtitle} />
        <PageSection>
            <HorizontalNav />
            <Outlet />
            <MoreButton />
        </PageSection>
        <PageFooter />
    </PageLayout>
);
