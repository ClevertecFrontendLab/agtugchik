import { FlexProps, Grid } from '@chakra-ui/react';
import { memo } from 'react';

import juicyItems from '~/03-pages/consts/juicy-items';
import { HorizontalRecipeCard } from '~/06-entites';

interface Props extends FlexProps {
    recipes: typeof juicyItems;
}

export const RecipeList = memo(({ recipes, ...props }: Props) => (
    <Grid
        gridTemplateColumns={{ xl: '1fr 1fr', lg: '1fr', md: '1fr 1fr', base: '1fr' }}
        gap={{ xl: '24px', base: '16px' }}
        {...props}
    >
        {recipes.map((recipe) => (
            <HorizontalRecipeCard key={recipe.title} {...recipe} />
        ))}
    </Grid>
));
