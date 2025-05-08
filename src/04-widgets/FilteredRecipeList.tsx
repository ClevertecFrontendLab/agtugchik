import { GridProps } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { useGetRecipesByCategoryQuery } from '~/01-app/query/services/recipes';
import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector } from '~/01-app/store/search-slice';
import { RecipeList } from '~/05-features';
import useAppStatus from '~/07-shared/hooks/use-app-status';
import { parseError } from '~/07-shared/lib';

export const FilteredRecipeList = (props: GridProps) => {
    const categories = useAppSelector(appCategoriesSelector);
    const { category, subcategory } = useParams();
    const { activeRecipes } = useAppSelector(searchSliceSelector);
    const subcategoryId = categories
        ?.find((cat) => cat.category === category)
        ?.subCategories.find((sub) => sub.category === subcategory)?._id;
    const {
        data: recipes,
        isLoading: isLoadingRecipesByCategory,
        isError: isErrorRecipesByCategory,
        error: errorRecipesByCategory,
    } = useGetRecipesByCategoryQuery({
        id: subcategoryId as string,
    });
    useAppStatus(
        isLoadingRecipesByCategory,
        isErrorRecipesByCategory,
        parseError(errorRecipesByCategory),
    );

    return (
        <RecipeList
            activeRecipes={activeRecipes.length ? activeRecipes : recipes?.data || []}
            {...props}
        />
    );
};
