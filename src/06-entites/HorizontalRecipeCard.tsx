import {
    Box,
    CardBody,
    CardFooter,
    CardHeader,
    CardProps,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '~/01-app/store/hooks';
import { searchBarValueSelector } from '~/01-app/store/search-slice';
import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import { AppBadge, AppButton, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';
import { useGetCardValues } from '~/07-shared/hooks';
import { Recipe } from '~/07-shared/types/api';

import { RecipeStatIcons } from './new-recipe-card/ui/RecipeStatIcons';

interface Props extends CardProps {
    recipe: Recipe;
    index: number;
}

export const HorizontalRecipeCard = memo(({ recipe, index, ...props }: Props) => {
    const { title, image, description, bookmarks, likes, _id: id, categoriesIds } = recipe;
    const navigate = useNavigate();
    const { fullPath, badgeTitle, badgeIcon } = useGetCardValues(categoriesIds[0], id);
    const searchBarValue = useAppSelector(searchBarValueSelector);

    const CardBadge = () => (
        <AppBadge label={badgeTitle} icon={badgeIcon} bgColor='var(--lime50)' />
    );

    const cookHandler = () => {
        navigate(fullPath);
    };

    return (
        <AppCard
            width='100%'
            height={{ lg: '244px', base: '128px' }}
            display='flex'
            flexDirection='row'
            {...props}
        >
            <Box position='relative' height='100%'>
                <Image
                    src={image}
                    minW={{ lg: '346px', base: '158px' }}
                    height='100%'
                    objectFit='cover'
                    alt='Card image'
                    borderRadius='8px 0 0 8px'
                />
                <Box
                    display={{ lg: 'none', base: 'block' }}
                    position='absolute'
                    top='8px'
                    left='8px'
                    zIndex='1'
                >
                    <CardBadge />
                </Box>
            </Box>

            <Flex
                direction='column'
                justify='space-between'
                p={{ lg: '20px 24px', base: '8px' }}
                maxWidth={{
                    xl: '322px',
                    lg: 'calc(100% - 346px)',
                    sm: 'calc(100% - 128px)',
                    base: '100%',
                }}
                width='100%'
            >
                <CardHeader
                    padding='0'
                    justifyContent='space-between'
                    alignItems='center'
                    display='flex'
                >
                    <Box display={{ base: 'none', lg: 'block' }}>
                        <CardBadge />
                    </Box>
                    <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
                </CardHeader>

                <CardBody padding='0'>
                    <AppCardTitle searchBarValue={searchBarValue}>{title}</AppCardTitle>
                    <AppCardText>{description}</AppCardText>
                </CardBody>

                <CardFooter padding='0' justifyContent='end' alignItems='center' columnGap='8px'>
                    <AppButton
                        h={{ lg: '32px', base: '24px' }}
                        w={{ lg: '122px', base: '24px' }}
                        columnGap='8px'
                    >
                        <Image
                            src={bookmark}
                            w={{ lg: '14px', base: '12px' }}
                            h={{ lg: '14px', base: '12px' }}
                        />
                        <Text display={{ lg: 'block', base: 'none' }}>Сохрнаить</Text>
                    </AppButton>
                    <AppButton
                        data-test-id={`card-link-${index}`}
                        w={{ lg: '87px', base: '70px' }}
                        h={{ lg: '32px', base: '24px' }}
                        backgroundColor='black'
                        color='white'
                        onClick={cookHandler}
                    >
                        Готовить
                    </AppButton>
                </CardFooter>
            </Flex>
        </AppCard>
    );
});
