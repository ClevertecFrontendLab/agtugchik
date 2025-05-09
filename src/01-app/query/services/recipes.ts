import { ApiEndpoints } from '~/01-app/query/constants/api';
import { ApiGroupNames } from '~/01-app/query/constants/api-group-names';
import { EndpointNames } from '~/01-app/query/constants/endpoint-names';
import { Tags } from '~/01-app/query/constants/tags';
import { apiSlice } from '~/01-app/query/create-api';
import { normalizeRecipe, normalizeRecipeArray } from '~/07-shared/lib';
import { GetRecipesParams, Recipe, RecipeResponse } from '~/07-shared/types/api';

interface GetRecipesByCategoryParams extends GetRecipesParams {
    id: string;
}

interface GetRecipeByIdParams {
    id: string;
}

export const recipesApiSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: [Tags.RECIPE] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getRecipes: builder.query<RecipeResponse, GetRecipesParams>({
                query: (params) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params,
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES,
                }),
                transformResponse: normalizeRecipeArray,
                providesTags: [Tags.RECIPE],
                keepUnusedDataFor: 3000,
            }),

            getRecipesByCategory: builder.query<RecipeResponse, GetRecipesByCategoryParams>({
                query: ({ id, ...params }) => ({
                    url: `${ApiEndpoints.RECIPE}/category/${id}`,
                    method: 'GET',
                    params,
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES_BY_CATEGORY,
                }),
                transformResponse: normalizeRecipeArray,
                providesTags: [Tags.RECIPE],
            }),

            getRecipeById: builder.query<Recipe, GetRecipeByIdParams>({
                query: ({ id }) => ({
                    url: `${ApiEndpoints.RECIPE}/${id}`,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPE_BY_ID,
                }),
                transformResponse: normalizeRecipe,
                providesTags: [Tags.RECIPE],
            }),
        }),
    });

export const {
    useGetRecipesQuery,
    useGetRecipesByCategoryQuery,
    useGetRecipeByIdQuery,
    useLazyGetRecipesQuery,
} = recipesApiSlice;
