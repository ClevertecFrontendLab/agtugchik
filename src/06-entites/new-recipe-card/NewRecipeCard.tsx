import { Box, CardBody, CardFooter, CardProps, Image } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';
import useGetCardValues from '~/07-shared/hooks/use-get-card-values';
import { Recipe } from '~/07-shared/types/api';

import { RecipeStatIcons } from './ui/RecipeStatIcons';

interface Props extends CardProps {
    recipe: Recipe;
    index: number;
}

export const NewRecipeCard = memo(({ recipe, index, ...props }: Props) => {
    const { title, image, description, bookmarks, likes, categoriesIds, _id: id } = recipe;
    const navigate = useNavigate();
    const { fullPath, badgeTitle, badgeIcon } = useGetCardValues(categoriesIds[0], id);

    const CardBadge = () => <AppBadge label={badgeTitle} icon={badgeIcon} />;

    const cookHandler = () => {
        navigate(fullPath);
    };

    return (
        <AppCard
            minWidth={{ xl: '322px', lg: '279px', base: '158px' }}
            maxWidth={{ xl: '322px', lg: '279px', base: '158px' }}
            h='100%'
            onClick={cookHandler}
            {...props}
        >
            <Box position='relative'>
                <Image
                    src={image}
                    width='100%'
                    height={{ lg: '230px', base: '128px' }}
                    objectFit='cover'
                    alt='Card image'
                />
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
