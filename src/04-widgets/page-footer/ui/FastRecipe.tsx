import { Box, Image, Text } from '@chakra-ui/react';

import accordionItems from '~/04-widgets/navigation/consts/accordion-item-props';
import { AppButton, AppCard } from '~/07-shared/components';

interface Props {
    title: string;
    type: string;
}

export const FastRecipe = ({ title, type }: Props) => (
    <AppCard
        display='flex'
        flexDirection='row'
        width='100%'
        height='100%'
        h={{ xl: '56px', lg: '52px' }}
        padding={{ xl: '0 24px', lg: '0 12px' }}
        align='center'
    >
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            columnGap='12px'
            width='100%'
        >
            <Image
                w='24px'
                h='24px'
                src={accordionItems.find((item) => item.label === type)?.icon as string}
            />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize={{ xl: '20px', lg: '18px' }}
                color='#000'
                w='100%'
                noOfLines={1}
            >
                {title}
            </Text>
        </Box>
        <AppButton
            minW={{ xl: '87px', lg: '70px' }}
            h='32px'
            padding={{ xl: '0 12px', lg: '0 8px' }}
            fontFamily='var(--font-family)'
            fontSize={{ xl: '14px', lg: '12px' }}
            borderColor='var(--lime600)'
            color='var(--lime600)'
        >
            Готовить
        </AppButton>
    </AppCard>
);
