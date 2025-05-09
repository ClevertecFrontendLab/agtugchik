import { useEffect, useState } from 'react';

import { useGetRecipesQuery, useLazyGetRecipesQuery } from '~/01-app/query/services/recipes';
import { PageHeader, PageSection } from '~/04-widgets';
import { RelevantKitchen } from '~/04-widgets';
import { RecipeList } from '~/05-features';
import { useAppStatus } from '~/07-shared/hooks';
import { parseError } from '~/07-shared/lib';
import { Recipe } from '~/07-shared/types/api';

import { MoreButton } from './ui/MoreButton';
import { PageLayout } from './ui/PageLayout';

export const JuicyPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isActiveMore, setIsActiveMore] = useState(true);
    const [activeRecipes, setActiveRecipes] = useState<Recipe[]>([]);
    const {
        data: juicyRecipes,
        isLoading: isLoadingRecipes,
        isError: isErrorRecipes,
        error: errorRecipes,
    } = useGetRecipesQuery(
        {
            page: currentPage,
            limit: 8,
            sortBy: 'likes',
            sortOrder: 'desc',
        },
        {
            skip: !!activeRecipes.length,
        },
    );
    const [
        fetchRecipes,
        {
            data: juicyRecipesLazy,
            isLoading: isLoadingRecipesLazy,
            isError: isErrorRecipesLaze,
            error: errorRecipesLazy,
        },
    ] = useLazyGetRecipesQuery();

    useEffect(() => {
        if (juicyRecipes?.data) {
            setActiveRecipes(juicyRecipes.data);
            setIsActiveMore(juicyRecipes.meta.page < juicyRecipes.meta.totalPages);
            setCurrentPage((prev) => prev + 1);
        }
    }, [juicyRecipes]);

    useEffect(() => {
        if (juicyRecipesLazy?.data) {
            setActiveRecipes((prev) => [...prev, ...juicyRecipesLazy.data]);
            setIsActiveMore(juicyRecipesLazy.meta.page < juicyRecipesLazy.meta.totalPages);
            setCurrentPage((prev) => prev + 1);
        }
    }, [juicyRecipesLazy]);

    useAppStatus(
        isLoadingRecipes,
        isErrorRecipes || isErrorRecipesLaze,
        parseError(errorRecipes || errorRecipesLazy),
    );

    return (
        <PageLayout>
            <PageHeader title='Самое сочное' />
            <PageSection
                gridTemplateAreas={`"content"
                                "more-button"`}
                gridTemplateColumns='1fr'
            >
                <RecipeList gridArea='content' activeRecipes={activeRecipes} />
                {isActiveMore && (
                    <MoreButton
                        onClick={() =>
                            fetchRecipes({
                                page: currentPage,
                                limit: 8,
                                sortBy: 'likes',
                                sortOrder: 'desc',
                            })
                        }
                        gridArea='more-button'
                        data-test-id='load-more-button'
                    >
                        {isLoadingRecipesLazy ? 'Загрузка' : 'Загрузить еще'}
                    </MoreButton>
                )}
            </PageSection>
            <RelevantKitchen />
        </PageLayout>
    );
};
