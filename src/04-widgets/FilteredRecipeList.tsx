import { GridProps } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { useGetRecipesByCategoryQuery } from '~/01-app/query/services/recipes';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector, setFoundRecipes } from '~/01-app/store/search-slice';
import { RecipeList } from '~/05-features';
import useFilter from '~/07-shared/hooks/use-filter';

export const FilteredRecipeList = (props: GridProps) => {
    const dispatch = useAppDispatch();
    const { data: categories } = useGetCategoriesQuery();
    const { category, subcategory } = useParams();
    const { searchBarValue, startFilter, isFoundRecipes } = useAppSelector(searchSliceSelector);
    const subcategoryId = categories
        ?.find((cat) => cat.category === category)
        ?.subCategories.find((sub) => sub.category === subcategory)?._id;
    const { data: recipes } = useGetRecipesByCategoryQuery({
        id: subcategoryId as string,
    });

    const activeRecipes = useFilter(
        (recipes?.data || []).filter((recipe) =>
            recipe.title.toLowerCase().includes(searchBarValue.toLowerCase()),
        ),
    );

    useEffect(() => {
        if (startFilter && activeRecipes.length > 0) dispatch(setFoundRecipes(true));
        else if (startFilter && activeRecipes.length === 0) dispatch(setFoundRecipes(false));
    }, [activeRecipes, dispatch, isFoundRecipes, startFilter]);

    return <RecipeList activeRecipes={activeRecipes} {...props} />;
};
