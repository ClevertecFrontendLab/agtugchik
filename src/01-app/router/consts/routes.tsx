import { Navigate } from 'react-router';

import { HomePage, JuicyPage, VeganPage } from '~/03-pages';
import { RecipePage } from '~/03-pages/recipe-page/RecipePage';
import SubcategoryFilter from '~/04-widgets/SubcategoryFilter';

import { AppPaths } from './app-paths';

export const routes = [
    {
        path: AppPaths.HOME,
        element: <HomePage />,
    },
    {
        path: AppPaths.VEGAN,
        element: <VeganPage />,
        children: [
            { path: AppPaths.VEGAN, element: <Navigate to={AppPaths.VEGAN_SIDE} /> },
            {
                path: ':subcategory',
                element: <SubcategoryFilter gridArea='content' />,
            },
        ],
    },
    {
        path: AppPaths.JUICY,
        element: <JuicyPage />,
    },
    { path: ':category/:subcategory/:id', element: <RecipePage /> },
    {
        path: '*',
        element: <h1>Still Empty</h1>,
    },
];
