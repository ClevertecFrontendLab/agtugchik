import { Grid, GridProps } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { useParams } from 'react-router';

import { useGetRecipesByCategoryQuery } from '~/01-app/query/services/recipes';
import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';
import { useAppStatus } from '~/07-shared/hooks';
import { parseError } from '~/07-shared/lib';
import getRandomItemFromArray from '~/07-shared/lib/get-random-item-from-array';
import { Category } from '~/07-shared/types/api';

import { mapValidRecipes } from './lib/map-valid-recipes';
import { FastRecipe } from './ui/FastRecipe';
import FooterCard from './ui/FooterCard';

interface Props extends GridProps {}

export const RelevantKitchen = memo(({ children, ...props }: Props) => {
    const { category } = useParams();
    const categories = useAppSelector(appCategoriesSelector);

    const activeCategory = useMemo(
        () => categories?.find((c) => c.category === category),
        [categories, category],
    );
    const availibleCategories = useMemo(
        () =>
            categories
                ?.filter((c) => !c.icon)
                .filter((c) => (activeCategory ? c.rootCategoryId === activeCategory._id : true)),
        [activeCategory, categories],
    );
    const randomCategory = useMemo(
        () => getRandomItemFromArray(availibleCategories || []) as Category,
        [availibleCategories],
    );
    const rootCategory = useMemo(
        () => categories?.find((c) => c._id === randomCategory.rootCategoryId),
        [categories, randomCategory],
    );

    const id = useMemo(() => randomCategory?._id, [randomCategory]);

    const {
        data: recipes,
        isLoading: isLoadingRecipesByCategory,
        isError: isErrorRecipesByCategory,
        error: errorRecipeByCategory,
    } = useGetRecipesByCategoryQuery({ id, limit: 5 }, { skip: !id });

    useAppStatus(
        isLoadingRecipesByCategory,
        isErrorRecipesByCategory,
        parseError(errorRecipeByCategory),
    );

    return (
        <Grid
            as='section'
            maxW='100%'
            width='100%'
            gap={{ xl: '24px', lg: '24px 16px', base: '16px' }}
            paddingTop='24px'
            borderTop='1px solid rgba(0, 0, 0, 0.08)'
            templateAreas={{
                xl: `"title subtitle"
                "cards fast"`,
                lg: `"title subtitle subtitle"
                "cards cards fast"`,
                md: `"title title title"
                "subtitle subtitle subtitle"
                "cards cards fast"`,
                base: `"title"
                "subtitle"
                "cards"
                "fast"`,
            }}
            templateColumns={{ xl: '1fr 1fr', md: '1fr 1fr 1fr', base: '1fr' }}
            templateRows={{ xl: 'min-content 1fr', md: 'min-content min-content 1fr' }}
            {...props}
        >
            <SectionTitle title={rootCategory?.title || ''} gridArea='title' />
            <PageSubtitle
                gridArea='subtitle'
                textAlign='left'
                color='rgba(0, 0, 0, 0.64)'
                subtitle={rootCategory?.description || ''}
            />
            <Grid
                gridArea='cards'
                gap={{ xl: '24px', base: '16px' }}
                gridTemplateColumns={{ md: '1fr 1fr', base: '1fr' }}
            >
                {mapValidRecipes(recipes?.data, 0, 2, (recipe) => (
                    <FooterCard key={recipe._id} recipe={recipe} />
                ))}
            </Grid>

            <Grid gridTemplateRows='1fr' gridArea='fast' rowGap='12px' w='100%'>
                {mapValidRecipes(recipes?.data, 2, 3, (recipe) => (
                    <FastRecipe key={recipe._id} recipe={recipe} />
                ))}
            </Grid>
        </Grid>
    );
});
