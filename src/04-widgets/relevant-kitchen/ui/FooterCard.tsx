import { CardBody, CardFooter, CardProps } from '@chakra-ui/react';

import { RecipeStatIcons } from '~/06-entites';
import { useGetCardValues } from '~/07-shared/hooks';
import { Recipe } from '~/07-shared/types/api';
import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/ui';

interface Props extends CardProps {
    recipe: Recipe;
}

const FooterCard = ({ recipe }: Props) => {
    const { title, description, bookmarks, likes, _id: id, categoriesIds } = recipe;
    const { badgeTitle, badgeIcon } = useGetCardValues(categoriesIds[0], id);

    return (
        <AppCard w='100%' h='100%' minW='0'>
            <CardBody padding={{ xl: '24px', lg: '16px 16px 24px 16px', base: '12px' }}>
                <AppCardTitle
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {title}
                </AppCardTitle>
                <AppCardText
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {description}
                </AppCardText>
            </CardBody>
            <CardFooter
                padding={{ xl: '0px 24px 20px 24px', lg: '0px 16px 16px 16px', base: '12px' }}
                justify='space-between'
            >
                <AppBadge label={badgeTitle} icon={badgeIcon} bgColor='var(--lime50)' />
                <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
            </CardFooter>
        </AppCard>
    );
};

export default FooterCard;
