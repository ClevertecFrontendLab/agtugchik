import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { AppPaths } from '~/01-app';
import accordionItemProps from '~/04-widgets/navigation/consts/accordion-item-props';

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
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    const [parentSegment, subSegment] = segments;

    const parentItem = itemProps.find((item) => item.path.split('/')[1] === parentSegment);
    const subItem = parentItem?.subroutes?.find((sub) => sub.path.split('/')[2] === subSegment);

    const crumbs = [
        {
            label: 'Главная',
            to: '/',
        },
        parentItem && {
            label: parentItem.label,
            to: parentItem.path,
        },
        subItem && {
            label: subItem.label,
            to: subItem.path,
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
