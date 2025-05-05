import { ApiEndpoints } from '~/01-app/query/constants/api';
import { ApiGroupNames } from '~/01-app/query/constants/api-group-names';
import { baseSrcUrl } from '~/01-app/query/constants/base-api-url';
import { EndpointNames } from '~/01-app/query/constants/endpoint-names';
import { Tags } from '~/01-app/query/constants/tags';
import { apiSlice } from '~/01-app/query/create-api';
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
                transformResponse: (response: RecipeResponse): RecipeResponse => ({
                    ...response,
                    data: response.data.map((recipe) => ({
                        ...recipe,
                        image: recipe.image ? `${baseSrcUrl}${recipe.image}` : '',
                        steps: recipe.steps.map((step) => ({
                            ...step,
                            image: step.image ? `${baseSrcUrl}${step.image}` : '',
                        })),
                    })),
                }),
                providesTags: [Tags.RECIPE],
            }),
            getRecipesByCategory: builder.query<RecipeResponse, GetRecipesByCategoryParams>({
                query: ({ id, ...params }) => ({
                    url: `${ApiEndpoints.RECIPE}/category/${id}`,
                    method: 'GET',
                    params,
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES_BY_CATEGORY,
                }),
                transformResponse: (response: RecipeResponse): RecipeResponse => ({
                    ...response,
                    data: response.data.map((recipe) => ({
                        ...recipe,
                        image: recipe.image ? `${baseSrcUrl}${recipe.image}` : '',
                        steps: recipe.steps.map((step) => ({
                            ...step,
                            image: step.image ? `${baseSrcUrl}${step.image}` : '',
                        })),
                    })),
                }),
                providesTags: [Tags.RECIPE],
            }),

            getRecipeById: builder.query<Recipe, GetRecipeByIdParams>({
                query: ({ id }) => ({
                    url: `${ApiEndpoints.RECIPE}/${id}`,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPE_BY_ID,
                }),
                transformResponse: (response: Recipe): Recipe => ({
                    ...response,
                    image: response.image ? `${baseSrcUrl}${response.image}` : '',
                    steps: response.steps.map((step) => ({
                        ...step,
                        image: step.image ? `${baseSrcUrl}${step.image}` : '',
                    })),
                }),
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
