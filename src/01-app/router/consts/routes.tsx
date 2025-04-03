import { HomePage, JuicyPage, VeganPage } from '~/03-pages';

import { AppPaths } from './app-paths';

export const routes = [
    {
        path: AppPaths.HOME,
        element: <HomePage />,
    },
    {
        path: AppPaths.VEGAN,
        element: <VeganPage />,
    },
    {
        path: AppPaths.JUICY,
        element: <JuicyPage />,
    },
];
