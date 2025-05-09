import { ApiEndpoints } from '~/01-app/query/constants/api';
import { ApiGroupNames } from '~/01-app/query/constants/api-group-names';
import { EndpointNames } from '~/01-app/query/constants/endpoint-names';
import { Tags } from '~/01-app/query/constants/tags';
import { apiSlice } from '~/01-app/query/create-api';
import { Category } from '~/07-shared/types/api';

import { baseSrcUrl } from '../constants/base-api-url';

export const categoryApiSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: [Tags.CATEGORY] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getCategories: builder.query<Category[], void>({
                query: () => ({
                    url: ApiEndpoints.CATEGORY,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.CATEGORY,
                    name: EndpointNames.GET_CATEGORIES,
                }),
                transformResponse: (response: Category[]) =>
                    response.map((category) => ({
                        ...category,
                        icon: category.icon ? `${baseSrcUrl}${category.icon}` : '',
                    })),
                providesTags: [Tags.CATEGORY],
            }),
        }),
    });

export const { useGetCategoriesQuery } = categoryApiSlice;
