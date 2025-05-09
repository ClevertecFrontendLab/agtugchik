import { Recipe } from '~/07-shared/types/api';

export const mapValidRecipes = <T>(
    recipes: unknown,
    start: number,
    end: number,
    renderFn: (recipe: Recipe) => T,
): T[] => {
    if (!Array.isArray(recipes)) return [];

    return recipes
        .filter((r): r is Recipe => r && typeof r === 'object' && '_id' in r && !!r._id)
        .slice(start, end)
        .map(renderFn);
};
