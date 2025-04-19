import { memo } from 'react';

import { AppPaths } from '~/01-app';
import juicyItems from '~/03-pages/consts/juicy-items';
import { PageHeader, PageSection } from '~/04-widgets';
import Blogers from '~/04-widgets/blogers/Blogers';
import { NewRecipiesSection } from '~/04-widgets/NewRecipiesSection';
import { PageFooter } from '~/04-widgets/page-footer/PageFooter';
import { RecipeList } from '~/05-features';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';

import { PageLayout } from './ui/PageLayout';
import SectionNavigationButton from './ui/SectionNavigationButton';

export const HomePage = memo(() => (
    <PageLayout>
        <PageHeader title='Приятного аппетита!' />

        <NewRecipiesSection />
        <PageSection
            gridTemplateAreas={{
                lg: `"title nav-button"
                    "content content"`,
                base: `"title"
                        "content"
                        "nav-button"`,
            }}
        >
            <SectionTitle gridArea='title' title='Самое сочное' />
            <SectionNavigationButton
                display={{ lg: 'flex', base: 'none' }}
                data-test-id='juiciest-link'
                gridArea='nav-button'
                navigateTo={AppPaths.JUICY}
            >
                Вся подборка
            </SectionNavigationButton>
            <SectionNavigationButton
                display={{ lg: 'none', base: 'flex' }}
                data-test-id='juiciest-link-mobile'
                gridArea='nav-button'
                navigateTo={AppPaths.JUICY}
            >
                Вся подборка
            </SectionNavigationButton>
            <RecipeList gridArea='content' recipes={juicyItems.slice(0, 4)} />
        </PageSection>
        <PageSection
            borderRadius='16px'
            padding={{ lg: '24px', base: '12px' }}
            backgroundColor='var(--lime300)'
            gridTemplateAreas={{
                lg: `"title nav-button"
                    "content content"`,
                base: `"title"
                        "content"
                        "nav-button"`,
            }}
            gridTemplateColumns={{ lg: '1fr 1fr', base: '1fr' }}
        >
            <SectionTitle
                gridArea='title'
                fontWeight={{ base: 500, lg: 400 }}
                fontSize={{ base: '24px', lg: '36px' }}
                lineHeight={{ base: '133%', lg: '111%' }}
                color='#000'
                title='Кулинарные блоги'
            />
            <SectionNavigationButton
                gridArea='nav-button'
                backgroundColor='inherit'
                border='none'
                navigateTo={AppPaths.HOME}
            >
                Вся авторы
            </SectionNavigationButton>
            <Blogers gridArea='content' />
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
