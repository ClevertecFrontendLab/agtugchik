import { useGetRecipesQuery } from '~/01-app/query/services/recipes';
import { PageHeader, PageSection } from '~/04-widgets';
import { RelevantKitchen } from '~/04-widgets';
import { RecipeList } from '~/05-features';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

export const JuicyPage = () => {
    const { data: juicyRecipes } = useGetRecipesQuery({
        page: 1,
        limit: 8,
        sortBy: 'likes',
        sortOrder: 'desc',
    });
    return (
        <PageLayout>
            <PageHeader title='Самое сочное' />
            <PageSection
                gridTemplateAreas={`"content"
                                "more-button"`}
                gridTemplateColumns='1fr'
            >
                <RecipeList gridArea='content' activeRecipes={juicyRecipes?.data || []} />
                <MoreButton gridArea='more-button' />
            </PageSection>
            <RelevantKitchen />
        </PageLayout>
    );
};
