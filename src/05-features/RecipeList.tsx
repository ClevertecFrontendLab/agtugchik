import { Flex, FlexProps } from '@chakra-ui/react';
import { memo } from 'react';

import juicyItems from '~/03-pages/consts/juicy-items';
import { HorizontalRecipeCard } from '~/06-entites';

interface Props extends FlexProps {
    recipes: typeof juicyItems;
}

export const RecipeList = memo(({ recipes, ...props }: Props) => (
    <Flex flexWrap='wrap' gap={{ xl: '24px', lg: '16px' }} gridArea='content' {...props}>
        {recipes.map((recipe) => (
            <HorizontalRecipeCard key={recipe.title} {...recipe} />
        ))}
    </Flex>
));
