import { AppPaths } from '~/01-app/router/consts/app-paths';
import { getCategoryPath, getRecipePath, getSubcategoryPath } from '~/07-shared/lib';

interface Crumb {
    label: string;
    to: string;
}

const theJuiciest = {
    title: 'Самое сочное',
    category: AppPaths.JUICY.replace('/', ''),
    subCategories: [],
};

export function getBreadcrumbs({
    category,
    subcategory,
    id,
    categories,
    recipeItem,
}: {
    category?: string;
    subcategory?: string;
    id?: string;
    categories: Array<{
        category: string;
        title: string;
        subCategories: Array<{ category: string; title: string }>;
    }> | null;
    recipeItem?: { title: string; _id: string } | null;
}): Crumb[] {
    if (!categories) return [];

    const categoryItem = [...categories, theJuiciest].find((c) => c.category === category);
    const subcategoryItem = categoryItem?.subCategories?.find((sc) => sc.category === subcategory);

    const result: Crumb[] = [{ label: 'Главная', to: '/' }];

    if (categoryItem) {
        result.push({
            label: categoryItem.title,
            to: getCategoryPath(categoryItem.category),
        });
    }

    if (categoryItem && subcategoryItem) {
        result.push({
            label: subcategoryItem.title,
            to: getSubcategoryPath(categoryItem.category, subcategoryItem.category),
        });
    }

    if (id && categoryItem && subcategoryItem && recipeItem) {
        result.push({
            label: recipeItem.title,
            to: getRecipePath(categoryItem.category, subcategoryItem.category, recipeItem._id),
        });
    }

    return result;
}
