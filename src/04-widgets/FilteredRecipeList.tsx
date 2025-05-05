import { GridProps } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { useGetRecipesByCategoryQuery } from '~/01-app/query/services/recipes';
import { useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector } from '~/01-app/store/search-slice';
import { RecipeList } from '~/05-features';

export const FilteredRecipeList = (props: GridProps) => {
    const { data: categories } = useGetCategoriesQuery();
    const { category, subcategory } = useParams();
    const { activeRecipes } = useAppSelector(searchSliceSelector);
    const subcategoryId = categories
        ?.find((cat) => cat.category === category)
        ?.subCategories.find((sub) => sub.category === subcategory)?._id;
    const { data: recipes } = useGetRecipesByCategoryQuery({
        id: subcategoryId as string,
    });

    return (
        <RecipeList
            activeRecipes={activeRecipes.length ? activeRecipes : recipes?.data || []}
            {...props}
        />
    );
};
