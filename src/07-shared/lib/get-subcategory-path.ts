import { SubCategory } from '../types/api';

export const getSubcategoryPath = (category: string, subCategory: SubCategory) =>
    `/${category}/${subCategory.category}`;
