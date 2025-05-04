import { useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { FilteredRecipeList, HorizontalNav, PageHeader, PageSection } from '~/04-widgets';
import { RelevantKitchen } from '~/04-widgets';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

export const CategoryPage = () => {
    const { data: categories } = useGetCategoriesQuery();
    const location = useLocation();
    const categpory = categories?.find((category) => location.pathname.includes(category.category));
    return (
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
    );
};
