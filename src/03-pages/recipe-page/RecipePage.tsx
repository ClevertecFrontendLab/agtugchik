import { Avatar, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { useGetRecipeByIdQuery } from '~/01-app/query/services/recipes';
import { PageSection } from '~/04-widgets';
import { NewRecipiesSection } from '~/04-widgets/NewRecipiesSection';
import { RecipeStatIcons } from '~/06-entites';
import author from '~/07-shared/assets/png/author.png';
import alarmClock from '~/07-shared/assets/svg/alarm-clock.svg';
import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import like from '~/07-shared/assets/svg/heart-eyes.svg';
import subscribe from '~/07-shared/assets/svg/subscribe.svg';
import subscribers from '~/07-shared/assets/svg/subscribers.svg';
import { useAppStatus, useGetCardValues } from '~/07-shared/hooks';
import { parseError } from '~/07-shared/lib';
import {
    AppBadge,
    AppButton,
    AppCard,
    PageSubtitle,
    PageTitle,
    SectionTitle,
    StatIcon,
} from '~/07-shared/ui';

import { PageLayout } from '../ui/PageLayout';
import Ingridients from './components/Ingridients';
import { NutritionValues } from './components/NutritionValue';

export const RecipePage = () => {
    const { id, category, subcategory } = useParams<{
        id: string;
        category: string;
        subcategory: string;
    }>();

    const {
        data: recipe,
        isLoading: isLoadingRecipeById,
        isError: isErrorRecipeById,
        error: errorRecipeByID,
    } = useGetRecipeByIdQuery({
        id: id as string,
    });
    const { badgeTitle, badgeIcon } = useGetCardValues(recipe?.categoriesIds[0] || '', id || '');

    const Badge = () => <AppBadge label={badgeTitle} icon={badgeIcon} bgColor='var(--lime50)' />;

    useAppStatus(isLoadingRecipeById, isErrorRecipeById, parseError(errorRecipeByID));

    return (
        <PageLayout>
            <Text display='none'>
                {id}, {category}, {subcategory}
            </Text>
            <PageSection
                mt={{ lg: '40px', md: '28px' }}
                gridTemplateColumns={{ md: 'max-content 1fr', base: '1fr' }}
                rowGap='40px'
                columnGap={{ lg: '24px', md: '16px' }}
                maxH={{ md: '410px' }}
                w='100%'
            >
                <Image
                    src={recipe?.image}
                    w={{ xl: '553px', lg: '353px', md: '232px', base: '100%' }}
                    h={{ lg: '410px', base: '224px' }}
                    borderRadius='8px'
                    objectFit='cover'
                />
                <Grid
                    rowGap='24px'
                    columnGap={{ xl: '16px', base: '12px' }}
                    gridTemplateColumns={{ md: '1fr 1fr min-content', base: 'min-content 1fr' }}
                    gridTemplateRows={{
                        md: 'min-content min-content 1fr min-content',
                        base: 'repeat(5, max-content)',
                    }}
                    gridTemplateAreas={{
                        md: `"badges badges stats"
                            "title title title"
                            "subtitle subtitle subtitle"
                            "time like add"`,
                        base: `"badges stats"
                            "title title"
                            "subtitle subtitle"
                            "time ."
                            "like add"`,
                    }}
                >
                    <Flex gridArea='badges' gap={{ xl: '16px', base: '8px' }} wrap='wrap'>
                        <Badge />
                    </Flex>
                    <RecipeStatIcons
                        gridArea='stats'
                        justify='end'
                        bookmarks={recipe?.bookmarks || 0}
                        likes={recipe?.likes || 0}
                    />
                    <PageTitle
                        gridArea='title'
                        textAlign='start'
                        title={recipe?.title || ''}
                        maxW='528px'
                    />
                    <PageSubtitle
                        color='black'
                        gridArea='subtitle'
                        textAlign='start'
                        subtitle={recipe?.description || ''}
                        noOfLines={3}
                        height='min-content'
                        maxW={{ xl: '528px', base: '100%' }}
                    />
                    <AppBadge
                        gridArea='time'
                        icon={alarmClock}
                        label={String(recipe?.time)}
                        bgColor='rgba(0, 0, 0, 0.06)'
                        alignSelf='end'
                    />
                    <AppButton
                        gap={{ lg: '8px', base: '6px' }}
                        gridArea='like'
                        justifyContent='space-between'
                        padding={{ xl: '0 24px', lg: '0 12px', base: '0 8px' }}
                        height={{ xl: '48px', lg: '32px', base: '24px' }}
                        width='max-content'
                        justifySelf={{ md: 'end', base: 'start' }}
                    >
                        <Image src={like} />
                        Оценить рецепт
                    </AppButton>
                    <AppButton
                        gap={{ lg: '8px', base: '6px' }}
                        buttonType='green'
                        gridArea='add'
                        justifyContent='space-between'
                        padding={{ xl: '0 24px', lg: '0 12px', base: '0 8px' }}
                        height={{ xl: '48px', lg: '32px', base: '24px' }}
                        width='max-content'
                        justifySelf={{ md: 'end', base: 'start' }}
                    >
                        <Image src={bookmark} />
                        Сохранить в закладки
                    </AppButton>
                </Grid>
            </PageSection>
            <NutritionValues {...recipe?.nutritionValue} />
            <Ingridients portions={recipe?.portions || 0} ingridients={recipe?.ingredients || []} />
            <PageSection maxW='668px'>
                <SectionTitle title='Шаги приготовления' />
                {recipe?.steps?.map?.((step) => (
                    <AppCard
                        display='grid'
                        key={step.stepNumber}
                        alignItems='start'
                        justifyContent='start'
                        gridTemplateAreas={step.image ? `'image text'` : `'text text'`}
                        gridTemplateColumns='max-content 1fr'
                        gridTemplateRows='max-content'
                    >
                        {step.image && (
                            <Image
                                w={{ lg: '346px', base: '158px' }}
                                h={{ lg: '244px', base: '128px' }}
                                gridArea='image'
                                src={step.image}
                            />
                        )}
                        <VStack
                            gridArea='text'
                            p={{ lg: '20px 24px', base: '8px' }}
                            alignItems='start'
                        >
                            <AppBadge
                                label={`Шаг ${step.stepNumber}`}
                                bgColor='rgba(0, 0, 0, 0.06)'
                            />
                            <Text alignSelf='start'>{step.description}</Text>
                        </VStack>
                    </AppCard>
                ))}
            </PageSection>
            <PageSection
                p={{ md: '24px', base: '12px' }}
                maxW='668px'
                w='100%'
                backgroundColor='var(--lime300)'
                borderRadius='8px'
                gridTemplateColumns='min-content 1fr 1fr'
                gridTemplateRows={{ md: 'repeat(3, min-content)', base: 'repeat(4, min-content)' }}
                gridTemplateAreas={{
                    md: `"avatar title text"
                        "avatar subtitle ."
                        "avatar subscribe subscribers"`,
                    base: `"avatar text text"
                        "avatar title title"
                        "avatar subtitle ."
                        "avatar subscribe subscribers"`,
                }}
                columnGap='16px'
                rowGap={0}
            >
                <Avatar
                    gridArea='avatar'
                    src={author}
                    name='Имя пользователя'
                    width='96px'
                    height='96px'
                />
                <Text
                    gridArea='title'
                    fontFamily='var(--font-family)'
                    fontWeight='700'
                    fontSize={{ md: '24px', base: '18px' }}
                    lineHeight='133%'
                    textAlign='start'
                    color='#000'
                >
                    Сергей Разумов
                </Text>

                <Text
                    gridArea='subtitle'
                    fontFamily='var(--font-family)'
                    fontWeight='400'
                    fontSize='14px'
                    lineHeight='143%'
                    textAlign='start'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    @serge25
                </Text>

                <AppButton
                    gridArea='subscribe'
                    backgroundColor='black'
                    color='white'
                    width='max-content'
                    p='4px 8px'
                    gap='6px'
                    h='24px'
                    alignSelf='end'
                >
                    <Image src={subscribe} />
                    Подписаться
                </AppButton>

                <Text
                    gridArea='text'
                    fontFamily='var(--font-family)'
                    fontWeight='400'
                    fontSize={{ md: '14px', base: '12px' }}
                    lineHeight='143%'
                    color='#000'
                    align='end'
                >
                    Автор рецепта
                </Text>

                <StatIcon
                    alignSelf='end'
                    justifySelf='end'
                    gridArea='subscribers'
                    h='min-content'
                    icon={subscribers}
                    count={125}
                />
            </PageSection>
            <NewRecipiesSection />
        </PageLayout>
    );
};
