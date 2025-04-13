import { Navigate } from 'react-router';

import { HomePage, JuicyPage, VeganPage } from '~/03-pages';
import veganItems from '~/03-pages/consts/vegan-items';
import { RecipeList } from '~/05-features';

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
            { path: AppPaths.VEGAN, element: <Navigate to={AppPaths.VEGAN_MAIN_COURSES} /> },
            { path: '*', element: <RecipeList gridArea='content' recipes={veganItems} /> },
        ],
    },
    {
        path: AppPaths.JUICY,
        element: <JuicyPage />,
    },
    {
        path: '*',
        element: <h1>Still Empty</h1>,
    },
];
