import { ApiEndpoints } from '~/01-app/query/constants/api';
import { ApiGroupNames } from '~/01-app/query/constants/api-group-names';
import { EndpointNames } from '~/01-app/query/constants/endpoint-names';
import { Tags } from '~/01-app/query/constants/tags';
import { apiSlice } from '~/01-app/query/create-api';
import { LoginFormValues, RegisterFormValues } from '~/07-shared/types/auth-form-values';

interface AuthResponse {
    statusText?: string;
    message?: string;
    error?: string;
    statusCode?: number;
}

export const authApiSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: [Tags.AUTH] })
    .injectEndpoints({
        endpoints: (builder) => ({
            login: builder.mutation<AuthResponse, LoginFormValues>({
                query: (body) => ({
                    url: ApiEndpoints.LOGIN,
                    method: 'POST',
                    body,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.LOGIN,
                }),
                invalidatesTags: [Tags.AUTH],
            }),

            register: builder.mutation<AuthResponse, Omit<RegisterFormValues, 'confirmPassword'>>({
                query: (body) => ({
                    url: ApiEndpoints.REGISTER,
                    method: 'POST',
                    body,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.REGISTER,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
        }),
    });

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
