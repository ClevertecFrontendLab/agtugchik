export const getCategoryPath = (category: string) => `/${category}`;

export const getSubcategoryPath = (category: string, subCategory: string) =>
    `/${category}/${subCategory}`;

export const getRecipePath = (category: string, subCategory: string, recipeId: string) =>
    `${getSubcategoryPath(category, subCategory)}/${recipeId}`;
