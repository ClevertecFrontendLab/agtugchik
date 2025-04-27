import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { AppPaths } from '~/01-app';
import { burgerActiveSelector, toggleBurger } from '~/01-app/store/burger-slice';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';
import accordionItemProps from '~/04-widgets/navigation/consts/accordion-item-props';
import recipes from '~/07-shared/consts/mockRecipes';

const additionalRoute = [
    {
        path: AppPaths.JUICY,
        label: 'Самое сочное',
        icon: '',
        subroutes: [],
    },
];

const itemProps = [...accordionItemProps, ...additionalRoute];

export const AppBreadcrumbs = (props: BreadcrumbProps) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);
    const isOpenBurger = useAppSelector(burgerActiveSelector);

    const [category, subcategory, id] = segments;

    const categoryItem = itemProps.find((item) => item.path.split('/')[1] === category);
    const subcategoryItem = categoryItem?.subroutes?.find(
        (sub) => sub.path.split('/')[2] === subcategory,
    );
    const idItem = recipes.find((recipe) => recipe.id === id);

    const crumbs = [
        {
            label: 'Главная',
            to: '/',
        },
        categoryItem && {
            label: categoryItem.label,
            to: categoryItem.path,
        },
        subcategoryItem && {
            label: subcategoryItem.label,
            to: subcategoryItem.path,
        },
        idItem && {
            label: idItem.title,
            to: idItem.id,
        },
    ].filter(Boolean);

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
                    <BreadcrumbItem key={crumb!.to} isCurrentPage={isLast} whiteSpace='nowrap'>
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
                                {crumb!.label}
                            </span>
                        ) : (
                            <BreadcrumbLink
                                as={Link}
                                to={crumb!.to}
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
                                {crumb!.label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
