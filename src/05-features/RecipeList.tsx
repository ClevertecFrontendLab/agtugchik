import { Grid, GridProps } from '@chakra-ui/react';
import { memo } from 'react';

import { HorizontalRecipeCard } from '~/06-entites';
import { Recipe } from '~/07-shared/consts/mockRecipes';

interface Props extends GridProps {
    activeRecipes: Recipe[];
}

export const RecipeList = memo(({ activeRecipes, ...props }: Props) => (
    <Grid
        gridTemplateColumns={{ xl: '1fr 1fr', lg: '1fr', md: '1fr 1fr', base: '1fr' }}
        gap={{ xl: '24px', base: '16px' }}
        {...props}
    >
        {activeRecipes.map((recipe, index) => (
            <HorizontalRecipeCard
                index={index}
                data-test-id={`food-card-${index}`}
                key={recipe.id}
                recipe={recipe}
            />
        ))}
    </Grid>
));
