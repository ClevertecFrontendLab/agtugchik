import { Image, Text } from '@chakra-ui/react';

import { useGetCardValues } from '~/07-shared/hooks';
import { Recipe } from '~/07-shared/types/api';
import { AppButton, AppCard } from '~/07-shared/ui';

interface Props {
    recipe: Recipe;
}

export const FastRecipe = ({ recipe }: Props) => {
    const { title, _id: id, categoriesIds } = recipe;
    const { badgeIcon } = useGetCardValues(categoriesIds[0], id);

    return (
        <AppCard
            display='grid'
            width='100%'
            height='100%'
            h={{ xl: '56px', lg: '52px', base: '48px' }}
            padding={{ xl: '0 24px', base: '0 12px' }}
            align='center'
            gridTemplateColumns='min-content 1fr min-content'
            gap='8px'
        >
            <Image minW='24px' w='24px' h='24px' src={badgeIcon} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize={{ xl: '20px', lg: '18px' }}
                color='#000'
                w='100%'
                isTruncated
            >
                {title}
            </Text>

            <AppButton
                minW={{ xl: '87px', base: '70px' }}
                h={{ lg: '32px', base: '24px' }}
                padding={{ xl: '0 12px', lg: '0 8px' }}
                fontFamily='var(--font-family)'
                fontSize={{ xl: '14px', base: '12px' }}
                borderColor='var(--lime600)'
                color='var(--lime600)'
            >
                Готовить
            </AppButton>
        </AppCard>
    );
};
