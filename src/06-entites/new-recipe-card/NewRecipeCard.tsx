import { Box, CardBody, CardFooter, Image } from '@chakra-ui/react';
import { memo } from 'react';

import accordionItemProps from '~/04-widgets/navigation/consts/accordion-item-props';
import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';
import { Recipe } from '~/07-shared/consts/mockRecipes';

import { RecipeStatIcons } from './ui/RecipeStatIcons';

interface Props {
    recipe: Recipe;
}

export const NewRecipeCard = memo(({ recipe }: Props) => {
    const { title, image, description, bookmarks, likes, category } = recipe;

    const CardBadge = () => {
        const accordionItem = accordionItemProps.find((item) =>
            item.path.startsWith(`/${category[0]}`),
        );

        return (
            <AppBadge label={accordionItem?.label as string} icon={accordionItem?.icon as string} />
        );
    };

    return (
        <AppCard
            minWidth={{ xl: '322px', lg: '279px', base: '158px' }}
            maxWidth={{ xl: '322px', lg: '279px', base: '158px' }}
            h='100%'
        >
            <Box position='relative'>
                <Image src={image} width='100%' height='auto' objectFit='cover' alt='Card image' />
                <Box
                    position='absolute'
                    top='8px'
                    left='8px'
                    display={{ base: 'block', lg: 'none' }}
                >
                    <CardBadge />
                </Box>
            </Box>
            <CardBody padding={{ xl: '24px', lg: '12px 12px 24px 12px', base: '8px' }}>
                <AppCardTitle>{title}</AppCardTitle>
                <AppCardText>{description}</AppCardText>
            </CardBody>

            <CardFooter
                padding={{ xl: '0 24px 20px 24px', lg: '0 12px 12px 12px', base: '0 8px' }}
                justifyContent='space-between'
            >
                <Box display={{ base: 'none', lg: 'block' }}>
                    <CardBadge />
                </Box>
                <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
            </CardFooter>
        </AppCard>
    );
});
