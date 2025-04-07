import juicyItems from '~/03-pages/consts/juicy-items';
import { PageHeader, PageSection } from '~/04-widgets';
import { PageFooter } from '~/04-widgets/page-footer/PageFooter';
import { RecipeList } from '~/05-features';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

export const JuicyPage = () => (
    <PageLayout>
        <PageHeader title='Самое сочное' />
        <PageSection>
            <RecipeList recipes={juicyItems} />
            <MoreButton />
        </PageSection>
        <PageFooter>
            <SectionTitle title='Веганская кухня' gridArea='title' />
            <PageSubtitle
                gridArea='subtitle'
                textAlign='left'
                color='rgba(0, 0, 0, 0.64)'
                subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
        </PageFooter>
    </PageLayout>
);
