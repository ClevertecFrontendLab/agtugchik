import { memo } from 'react';

import { AppPaths } from '~/01-app';
import juicyItems from '~/03-pages/consts/juicy-items';
import { PageHeader, PageSection } from '~/04-widgets';
import Blogers from '~/04-widgets/blogers/Blogers';
import { PageFooter } from '~/04-widgets/page-footer/PageFooter';
import { Carousel, RecipeList } from '~/05-features';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';

import { PageLayout } from './ui/PageLayout';
import SectionNavigationButton from './ui/SectionNavigationButton';

export const HomePage = memo(() => (
    <PageLayout>
        <PageHeader title='Приятного аппетита!' />
        <PageSection>
            <SectionTitle title='Новые рецепты' />
            <Carousel />
        </PageSection>
        <PageSection>
            <SectionTitle title='Самое сочное' />
            <SectionNavigationButton navigateTo={AppPaths.JUICY}>
                Вся подборка
            </SectionNavigationButton>
            <RecipeList recipes={juicyItems.slice(0, 4)} />
        </PageSection>
        <PageSection borderRadius='16px' padding='24px' backgroundColor='var(--lime300)'>
            <SectionTitle
                fontSize='36px'
                lineHeight='111%'
                fontWeight={400}
                title='Кулинарные блоги'
            />
            <SectionNavigationButton
                backgroundColor='inherit'
                border='none'
                navigateTo={AppPaths.HOME}
            >
                Вся авторы
            </SectionNavigationButton>
            <Blogers />
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
));
