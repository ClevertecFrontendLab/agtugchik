import { Grid, GridProps } from '@chakra-ui/react';
import { memo } from 'react';
import { useParams } from 'react-router';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { useGetRecipesByCategoryQuery } from '~/01-app/query/services/recipes';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';
import getRandomItemFromArray from '~/07-shared/lib/get-random-item-from-array';
import { Category } from '~/07-shared/types/api';

import { FastRecipe } from './ui/FastRecipe';
import FooterCard from './ui/FooterCard';

interface Props extends GridProps {}

export const RelevantKitchen = memo(({ children, ...props }: Props) => {
    const { category } = useParams();
    const { data: categories } = useGetCategoriesQuery();

    const activeCategory = categories?.find((c) => c.category === category);
    const availibleCategories = categories
        ?.filter((c) => !c.icon)
        .filter((c) => (activeCategory ? c.rootCategoryId === activeCategory._id : true));
    const randomCategory = getRandomItemFromArray(availibleCategories || []) as Category;
    const rootCategory = categories?.find((c) => c._id === randomCategory.rootCategoryId);

    const id = randomCategory?._id;

    const { data: recipes } = useGetRecipesByCategoryQuery({ id, limit: 5 }, { skip: !id });
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
                {(recipes?.data.slice(0, 2) || []).map((recipe) => (
                    <FooterCard key={recipe.title} recipe={recipe} />
                ))}
            </Grid>
            <Grid gridTemplateRows='1fr' gridArea='fast' rowGap='12px' w='100%'>
                {(recipes?.data.slice(2, 3) || []).map((recipe) => (
                    <FastRecipe key={recipe.title} recipe={recipe} />
                ))}
            </Grid>
        </Grid>
    );
});
