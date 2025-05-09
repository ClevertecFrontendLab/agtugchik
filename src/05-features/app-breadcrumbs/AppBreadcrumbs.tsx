import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router';

import { useGetRecipeByIdQuery } from '~/01-app/query/services/recipes';
import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { burgerActiveSelector, toggleBurger } from '~/01-app/store/burger-slice';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import { useAppStatus } from '~/07-shared/hooks';
import { parseError } from '~/07-shared/lib';

import { getBreadcrumbs } from './lib/get-breadcrumbs';

export const AppBreadcrumbs = memo((props: BreadcrumbProps) => {
    const categories = useAppSelector(appCategoriesSelector);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);
    const isOpenBurger = useAppSelector(burgerActiveSelector);

    const [category, subcategory, id] = segments;

    const {
        data: recipeItem,
        isLoading: isLoadingRecipeById,
        isError: isErrorRecipeById,
        error: errorRecipeById,
    } = useGetRecipeByIdQuery({ id }, { skip: !id });

    const crumbs = useMemo(
        () =>
            getBreadcrumbs({
                category,
                subcategory,
                id,
                categories,
                recipeItem,
            }),
        [categories, category, subcategory, recipeItem, id],
    );

    useAppStatus(isLoadingRecipeById, isErrorRecipeById, parseError(errorRecipeById));

    return (
        <Breadcrumb
            data-test-id='breadcrumbs'
            display='flex'
            flexWrap='wrap'
            spacing='8px'
            separator={<ChevronRightIcon color='black' />}
            padding='12px 24px'
            listProps={{
                display: 'flex',
                flexWrap: 'wrap',
                w: '100%',
                gap: '8px',
            }}
            {...props}
        >
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;

                return (
                    <BreadcrumbItem key={crumb.to} isCurrentPage={isLast} whiteSpace='nowrap'>
                        {isLast ? (
                            <span
                                style={{
                                    fontFamily: 'var(--font-family)',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '150%',
                                    textAlign: 'center',
                                    color: '#000',
                                }}
                            >
                                {crumb.label}
                            </span>
                        ) : (
                            <BreadcrumbLink
                                as={Link}
                                to={crumb.to}
                                fontFamily='var(--font-family)'
                                fontWeight={400}
                                fontSize='16px'
                                lineHeight='150%'
                                textAlign='center'
                                color='rgba(0, 0, 0, 0.64)'
                                whiteSpace='nowrap'
                                onClick={() => {
                                    if (isOpenBurger) dispatch(toggleBurger());
                                }}
                            >
                                {crumb.label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
});
