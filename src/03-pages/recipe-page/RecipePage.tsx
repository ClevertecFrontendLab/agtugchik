import { Avatar, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { PageSection } from '~/04-widgets';
import accordionItemProps from '~/04-widgets/navigation/consts/accordion-item-props';
import { NewRecipiesSection } from '~/04-widgets/NewRecipiesSection';
import { RecipeStatIcons } from '~/06-entites';
import author from '~/07-shared/assets/png/author.png';
import alarmClock from '~/07-shared/assets/svg/alarm-clock.svg';
import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import like from '~/07-shared/assets/svg/heart-eyes.svg';
import subscribe from '~/07-shared/assets/svg/subscribe.svg';
import subscribers from '~/07-shared/assets/svg/subscribers.svg';
import {
    AppBadge,
    AppButton,
    AppCard,
    PageSubtitle,
    PageTitle,
    SectionTitle,
    StatIcon,
} from '~/07-shared/components';
import mockRecipies from '~/07-shared/consts/mockRecipies';

import { PageLayout } from '../ui/PageLayout';
import Ingridients from './components/Ingridients';
import { NutritionValues } from './components/NutritionValue';

export const RecipePage = () => {
    const { id, category, subcategory } = useParams<{
        id: string;
        category: string;
        subcategory: string;
    }>();

    const recipe = mockRecipies[0];

    const badges = recipe.category.map((badge) => {
        const item = accordionItemProps.find((item) =>
            item.path.includes(badge),
        ) as (typeof accordionItemProps)[0];

        return (
            <AppBadge
                key={item.label}
                icon={item.icon}
                label={item.label}
                bgColor='var(--lime50)'
            />
        );
    });
    return (
        <PageLayout>
            <Text display='none'>
                {id}, {category}, {subcategory}
            </Text>
            <PageSection mt='56px' gridTemplateColumns='max-content 1fr' gap='40px' maxH='410px'>
                <Image src={recipe.image} w='auto' h='410px' borderRadius='8px' />
                <Grid
                    gap='24px'
                    gridTemplateColumns='1fr 1fr min-content'
                    gridTemplateRows='min-content min-content 1fr min-content'
                    gridTemplateAreas={`"badges badges stats"
                                        "title title title"
                                        "subtitle subtitle subtitle"
                                        "time like add"`}
                >
                    <Flex gridArea='badges' gap='16px' wrap='wrap'>
                        {badges}
                    </Flex>
                    <RecipeStatIcons
                        gridArea='stats'
                        justify='end'
                        bookmarks={recipe.bookmarks}
                        likes={recipe.likes}
                    />
                    <PageTitle
                        gridArea='title'
                        textAlign='start'
                        title={recipe.title}
                        maxW='528px'
                    />
                    <PageSubtitle
                        color='black'
                        gridArea='subtitle'
                        textAlign='start'
                        subtitle={recipe.description}
                        noOfLines={3}
                        height='min-content'
                        maxW='528px'
                    />
                    <AppBadge
                        gridArea='time'
                        icon={alarmClock}
                        label={recipe.time}
                        bgColor='rgba(0, 0, 0, 0.06)'
                        alignSelf='end'
                    />
                    <AppButton
                        gap='8px'
                        gridArea='like'
                        justifyContent='space-between'
                        padding='0 24px'
                        width='max-content'
                        justifySelf='end'
                    >
                        <Image src={like} />
                        Оценить рецепт
                    </AppButton>
                    <AppButton
                        gap='8px'
                        buttonType='green'
                        gridArea='add'
                        justifyContent='space-between'
                        padding='0 24px'
                        width='max-content'
                        justifySelf='end'
                    >
                        <Image src={bookmark} />
                        Сохранить в закладки
                    </AppButton>
                </Grid>
            </PageSection>
            <NutritionValues {...recipe.nutritionValue} />
            <Ingridients ingridients={recipe.ingredients} />
            <PageSection maxW='668px'>
                <SectionTitle title='Шаги приготовления' />
                {recipe.steps.map((step) => (
                    <AppCard
                        key={step.stepNumber}
                        p='20px 24px'
                        alignItems='start'
                        justifyContent='start'
                    >
                        <AppBadge label={`Шаг ${step.stepNumber}`} bgColor='rgba(0, 0, 0, 0.06)' />
                        {step.description}
                    </AppCard>
                ))}
            </PageSection>
            <PageSection
                p='24px'
                h='144px'
                maxW='668px'
                w='100%'
                backgroundColor='var(--lime300)'
                borderRadius='8px'
                gridTemplateColumns='min-content 1fr 1fr'
                gridTemplateRows='1fr 1fr 1fr'
                gridTemplateAreas={`"avatar title text"
                                    "avatar subtitle ."
                                    "avatar subscribe subscribers"`}
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
                    fontSize='24px'
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
                    fontSize='14px'
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
                    icon={subscribers}
                    count={125}
                />
            </PageSection>
            <NewRecipiesSection />
        </PageLayout>
    );
};
