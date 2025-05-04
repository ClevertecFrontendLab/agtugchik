import { useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector } from '~/01-app/store/search-slice';
import categories from '~/07-shared/consts/categories';
import { Recipe } from '~/07-shared/types/api';

const useFilter = (r: Recipe[]) => {
    const { searchBarValue, categoryFilter, meatFilter, sideDishFilter, alergenFilter } =
        useAppSelector(searchSliceSelector);
    let newRecipes = [...r];

    if (categoryFilter.length > 0) {
        newRecipes = newRecipes.filter((recipe) =>
            recipe.categoriesIds.some((category) =>
                categoryFilter.length
                    ? categoryFilter
                          .map((cat) => categories.find((c) => c.category === cat)?.key)
                          .includes(category)
                    : true,
            ),
        );
    }

    if (searchBarValue.length > 0) {
        newRecipes = newRecipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchBarValue.toLowerCase()),
        );
    }

    const filters = [
        ...meatFilter,
        ...sideDishFilter,
        ...alergenFilter.flatMap((item) =>
            item.includes('(')
                ? item
                      .split(/[()]/)
                      .map((subItem) => subItem.trim())
                      .filter(Boolean)
                : item.trim(),
        ),
    ];

    newRecipes = newRecipes.filter((recipe) =>
        recipe.ingredients.every(
            (ingredient) =>
                !filters.some((filter) =>
                    ingredient.title.toLowerCase().includes(filter.toLowerCase()),
                ),
        ),
    );

    return newRecipes;
};

export default useFilter;
