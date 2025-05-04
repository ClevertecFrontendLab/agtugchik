export interface SubCategory {
    _id: string;
    title: string;
    category: string;
    rootCategoryId: string;
}

export interface Category {
    _id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    subCategories: SubCategory[];
    rootCategoryId?: string;
}

export interface RecipeStep {
    stepNumber: number;
    description: string;
    image: string;
}

export interface NutritionValue {
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
}

export interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

export interface AuthorData {
    login: string;
    firstName: string;
    lastName: string;
    subscribers: string[];
}

export interface Recipe {
    _id: string;
    title: string;
    description: string;
    time: number;
    image: string;
    meat: string;
    garnish: string;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: RecipeStep[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    likes: number;
    views: number;
    bookmarks: number;
    createdAt: string;
    authorData: AuthorData;
}

export interface RecipeResponse {
    data: Recipe[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export interface GetRecipesParams {
    page?: number;
    limit?: number;
    allergens?: string;
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
    sortBy?: 'createdAt' | 'likes';
    sortOrder?: 'asc' | 'desc';
}
