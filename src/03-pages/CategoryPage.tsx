import { Navigate, useLocation } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';
import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { FilteredRecipeList, HorizontalNav, PageHeader, PageSection } from '~/04-widgets';
import { RelevantKitchen } from '~/04-widgets';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

export const CategoryPage = () => {
    const categories = useAppSelector(appCategoriesSelector);
    const location = useLocation();
    const categpory = categories?.find((category) =>
        location.pathname.startsWith(`/${category.category}`),
    );

    return (
        <>
            {categpory ? (
                <PageLayout>
                    <PageHeader title={categpory?.title || ''} subtitle={categpory?.description} />
                    <PageSection
                        gridTemplateAreas={`"tabs"
                                "content"
                                "more-button"`}
                        gridTemplateColumns='1fr'
                    >
                        <HorizontalNav
                            category={categpory?.category || ''}
                            items={categpory?.subCategories || []}
                            gridArea='tabs'
                        />
                        <FilteredRecipeList />
                        <MoreButton gridArea='more-button' />
                    </PageSection>
                    <RelevantKitchen />
                </PageLayout>
            ) : (
                <Navigate to={AppPaths.NOT_FOUND} />
            )}
        </>
    );
};
