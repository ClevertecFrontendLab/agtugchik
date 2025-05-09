import { baseSrcUrl } from '~/01-app/query/constants/base-api-url';
import { Recipe, RecipeResponse } from '~/07-shared/types/api';

export const normalizeRecipe = (recipe: Recipe): Recipe => {
    const safeSteps = Array.isArray(recipe.steps) ? recipe.steps : [];

    return {
        ...recipe,
        image: recipe.image ? `${baseSrcUrl}${recipe.image}` : '',
        steps: safeSteps.map((step) => ({
            ...step,
            image: step.image ? `${baseSrcUrl}${step.image}` : '',
        })),
    };
};

export const normalizeRecipeArray = (response: RecipeResponse): RecipeResponse => ({
    ...response,
    data: Array.isArray(response.data) ? response.data.map(normalizeRecipe) : [],
});
