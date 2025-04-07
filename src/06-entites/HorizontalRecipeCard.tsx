import { CardBody, CardFooter, CardHeader, Flex, Image } from '@chakra-ui/react';
import { memo } from 'react';

import accordionItemProps from '~/04-widgets/navigation/consts/accordion-item-props';
import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import { AppBadge, AppButton, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';

import { RecipeStatIcons } from './new-recipe-card/ui/RecipeStatIcons';

interface Props {
    title: string;
    text: string;
    image: string;
    type: string;
    bookmarks: number;
    likes: number;
}

export const HorizontalRecipeCard = memo((props: Props) => {
    const { title, image, text, type, bookmarks, likes } = props;

    return (
        <AppCard width='668px' height='244px' display='flex' flexDirection='row'>
            <Image
                src={image}
                width='346px'
                height='244px'
                objectFit='cover'
                alt='Card image'
                borderRadius='8px 0 0 8px'
            />
            <Flex
                direction='column'
                justify='space-between'
                p='20px 24px'
                maxWidth='322px'
                rowGap='24px'
            >
                <CardHeader
                    padding='0'
                    justifyContent='space-between'
                    alignItems='center'
                    display='flex'
                >
                    <AppBadge
                        label={type}
                        icon={
                            accordionItemProps.find((item) => item.label === type)?.icon as string
                        }
                        bgColor='var(--lime50)'
                    />
                    <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
                </CardHeader>

                <CardBody padding='0'>
                    <AppCardTitle>{title}</AppCardTitle>
                    <AppCardText>{text}</AppCardText>
                </CardBody>

                <CardFooter padding='0' justifyContent='end' alignItems='center' columnGap='8px'>
                    <AppButton h='32px' w='122px' columnGap='8px'>
                        <Image src={bookmark} />
                        Сохрнаить
                    </AppButton>
                    <AppButton w='87px' h='32px' backgroundColor='black' color='white'>
                        Готовить
                    </AppButton>
                </CardFooter>
            </Flex>
        </AppCard>
    );
});
