import { HomePage, JuicyPage } from '~/03-pages';
import { CategoryPage } from '~/03-pages/CategoryPage';
import { RecipePage } from '~/03-pages/recipe-page/RecipePage';

import { AppPaths } from './app-paths';

export const routes = [
    {
        path: AppPaths.HOME,
        element: <HomePage />,
    },
    {
        path: AppPaths.JUICY,
        element: <JuicyPage />,
    },
    { path: ':category/:subcategory', element: <CategoryPage /> },
    { path: ':category/:subcategory/:id', element: <RecipePage /> },
    {
        path: '*',
        element: <h1>Still Empty</h1>,
    },
];
