import { CategoryPage, HomePage, JuicyPage, NotFoundPage, RecipePage } from '~/03-pages';
import { CategoryRedirect } from '~/05-features';

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
    { path: ':category/', element: <CategoryRedirect /> },
    { path: ':category/:subcategory', element: <CategoryPage /> },
    { path: ':category/:subcategory/:id', element: <RecipePage /> },
    { path: AppPaths.NOT_FOUND, element: <NotFoundPage /> },
];
