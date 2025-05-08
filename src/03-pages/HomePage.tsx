import { memo } from 'react';

import { useGetRecipesQuery } from '~/01-app/query/services/recipes';
import { AppPaths } from '~/01-app/router/consts/app-paths';
import { useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector } from '~/01-app/store/search-slice';
import { PageHeader, PageSection } from '~/04-widgets';
import { RelevantKitchen } from '~/04-widgets';
import Blogers from '~/04-widgets/blogers/Blogers';
import { NewRecipiesSection } from '~/04-widgets/NewRecipiesSection';
import { RecipeList } from '~/05-features';
import { SectionTitle } from '~/07-shared/components';
import useAppStatus from '~/07-shared/hooks/use-app-status';
import { parseError } from '~/07-shared/lib';

import { PageLayout } from './ui/PageLayout';
import SectionNavigationButton from './ui/SectionNavigationButton';

export const HomePage = memo(() => {
    const { activeRecipes } = useAppSelector(searchSliceSelector);
    const {
        data: juicyRecipes,
        isLoading: isLoadingRecipes,
        isError: isErrorRecipes,
        error: errorRecipes,
    } = useGetRecipesQuery({
        page: 1,
        limit: 4,
        sortBy: 'likes',
        sortOrder: 'desc',
    });

    useAppStatus(isLoadingRecipes, isErrorRecipes, parseError(errorRecipes));

    return (
        <PageLayout>
            <PageHeader title='Приятного аппетита!' />

            {activeRecipes.length ? (
                <RecipeList activeRecipes={activeRecipes} />
            ) : (
                <>
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
                            display={{ md: 'flex', base: 'none' }}
                            data-test-id='juiciest-link'
                            gridArea='nav-button'
                            navigateTo={AppPaths.JUICY}
                        >
                            Вся подборка
                        </SectionNavigationButton>
                        <SectionNavigationButton
                            display={{ md: 'none', base: 'flex' }}
                            data-test-id='juiciest-link-mobile'
                            gridArea='nav-button'
                            navigateTo={AppPaths.JUICY}
                        >
                            Вся подборка
                        </SectionNavigationButton>
                        <RecipeList gridArea='content' activeRecipes={juicyRecipes?.data || []} />
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
                </>
            )}

            <RelevantKitchen />
        </PageLayout>
    );
});
