import { Navigate, useParams } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { getSubcategoryPath } from '~/07-shared/lib';

export const CategoryRedirect = () => {
    const { category } = useParams();
    const { data: categories } = useGetCategoriesQuery();
    const categoryItem = categories?.find((c) => c.category === category);

    return (
        <Navigate
            to={getSubcategoryPath(
                category as string,
                categoryItem?.subCategories[0].category || '',
            )}
        />
    );
};
