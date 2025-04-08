import { CardBody, CardFooter, Image } from '@chakra-ui/react';
import { memo } from 'react';

import accordionItems from '~/04-widgets/navigation/consts/accordion-item-props';
import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';

import { RecipeStatIcons } from './ui/RecipeStatIcons';

interface Props {
    title: string;
    text: string;
    image: string;
    type: string;
    bookmarks: number;
    likes: number;
}

export const NewRecipeCard = memo((props: Props) => {
    const { title, image, text, type, bookmarks, likes } = props;

    return (
        <AppCard minWidth={{ xl: '322px', lg: '279px' }}>
            <Image src={image} width='100%' height='auto' objectFit='cover' alt='Card image' />
            <CardBody padding={{ xl: '24px', lg: '12px 12px 24px 12px' }}>
                <AppCardTitle>{title}</AppCardTitle>
                <AppCardText>{text}</AppCardText>
            </CardBody>
            <CardFooter
                padding={{ xl: '0 24px 20px 24px', lg: '0 12px 12px 12px' }}
                justifyContent='space-between'
            >
                <AppBadge
                    icon={accordionItems.find((item) => item.label === type)?.icon as string}
                    label={type}
                />
                <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
            </CardFooter>
        </AppCard>
    );
});
