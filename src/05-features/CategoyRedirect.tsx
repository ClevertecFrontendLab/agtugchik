import { Navigate, useParams } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { AppPaths } from '~/01-app/router/consts/app-paths';
import { getSubcategoryPath } from '~/07-shared/lib';

export const CategoryRedirect = () => {
    const { category } = useParams();
    const { data: categories } = useGetCategoriesQuery();
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
