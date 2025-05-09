import { Navigate, useParams } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';
import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { getSubcategoryPath } from '~/07-shared/lib';

export const CategoryRedirect = () => {
    const { category } = useParams();
    const categories = useAppSelector(appCategoriesSelector);
    const categoryItem = categories?.find((c) => c.category === category);

    return (
        <>
            {categoryItem ? (
                <Navigate
                    to={getSubcategoryPath(
                        category as string,
                        categoryItem?.subCategories[0].category || '',
                    )}
                />
            ) : (
                <Navigate to={AppPaths.NOT_FOUND} />
            )}
        </>
    );
};
