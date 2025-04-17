import { ApiEndpoints } from '~/01-app/query/constants/api.ts';
import { ApiGroupNames } from '~/01-app/query/constants/api-group-names.ts';
import { EndpointNames } from '~/01-app/query/constants/endpoint-names.ts';
import { Tags } from '~/01-app/query/constants/tags.ts';
import { apiSlice } from '~/01-app/query/create-api.ts';

export const postsApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.POSTS],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getPosts: builder.query<void, void>({
                query: () => ({
                    url: ApiEndpoints.POSTS,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.POSTS,
                    name: EndpointNames.GET_POSTS,
                }),
                providesTags: [Tags.POSTS],
            }),
        }),
    });

export const { useGetPostsQuery } = postsApiSlice;
