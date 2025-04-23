import { GridProps } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { useAppSelector } from '~/01-app/store/hooks';
import { searchBarValueSelector } from '~/01-app/store/search-slice';
import { RecipeList } from '~/05-features';
import recipes from '~/07-shared/consts/mockRecipes';

const SubcategoryFilter = (props: GridProps) => {
    const { subcategory } = useParams();
    const searchBarValue = useAppSelector(searchBarValueSelector);

    const activeRecipes = recipes
        .filter((recipe) => recipe.subcategory.includes(subcategory as string))
        .filter((recipe) => recipe.title.toLowerCase().includes(searchBarValue.toLowerCase()));
    return <RecipeList activeRecipes={activeRecipes} {...props} />;
};

export default SubcategoryFilter;
