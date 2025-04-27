import { GridProps } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector, setFoundRecipes } from '~/01-app/store/search-slice';
import { RecipeList } from '~/05-features';
import recipes from '~/07-shared/consts/mockRecipes';
import useFilter from '~/07-shared/hooks/use-filter';

const SubcategoryFilter = (props: GridProps) => {
    const dispatch = useAppDispatch();
    const { subcategory } = useParams();
    const { searchBarValue, startFilter, isFoundRecipes } = useAppSelector(searchSliceSelector);

    const activeRecipes = useFilter(
        recipes
            .filter((recipe) => recipe.subcategory.includes(subcategory as string))
            .filter((recipe) => recipe.title.toLowerCase().includes(searchBarValue.toLowerCase())),
    );

    useEffect(() => {
        if (startFilter && activeRecipes.length > 0) dispatch(setFoundRecipes(true));
        else if (startFilter && activeRecipes.length === 0) dispatch(setFoundRecipes(false));
    }, [activeRecipes, dispatch, isFoundRecipes, startFilter]);

    return <RecipeList activeRecipes={activeRecipes} {...props} />;
};

export default SubcategoryFilter;
