import {
    CategoryPage,
    HomePage,
    JuicyPage,
    LoginPage,
    NotFoundPage,
    RecipePage,
    RegisterPage,
    VerificationPage,
} from '~/03-pages';
import { CategoryRedirect } from '~/05-features';

import { AppPaths } from './app-paths';

export const routes = [
    { path: AppPaths.HOME, element: <HomePage /> },
    { path: AppPaths.JUICY, element: <JuicyPage /> },
    { path: AppPaths.LOGIN, element: <LoginPage /> },
    { path: AppPaths.REGISTER, element: <RegisterPage /> },
    { path: AppPaths.VERIFICATION, element: <VerificationPage /> },
    { path: AppPaths.NOT_FOUND, element: <NotFoundPage /> },
    { path: ':category/', element: <CategoryRedirect /> },
    { path: ':category/:subcategory', element: <CategoryPage /> },
    { path: ':category/:subcategory/:id', element: <RecipePage /> },
];
