import { Box, CardBody, CardFooter, Image } from '@chakra-ui/react';
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

    const badge = (
        <AppBadge
            icon={accordionItems.find((item) => item.label === type)?.icon as string}
            label={type}
        />
    );

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
                    {badge}
                </Box>
            </Box>
            <CardBody padding={{ xl: '24px', lg: '12px 12px 24px 12px', base: '8px' }}>
                <AppCardTitle>{title}</AppCardTitle>
                <AppCardText>{text}</AppCardText>
            </CardBody>

            <CardFooter
                padding={{ xl: '0 24px 20px 24px', lg: '0 12px 12px 12px', base: '0 8px' }}
                justifyContent='space-between'
            >
                <Box display={{ base: 'none', lg: 'block' }}>{badge}</Box>
                <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
            </CardFooter>
        </AppCard>
    );
});
