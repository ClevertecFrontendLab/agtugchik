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
        justify='space-between'
        h='56px'
        padding='0 24px'
        align='center'
    >
        <Box display='flex' flexDirection='row' justifyContent='center' columnGap='12px'>
            <Image
                w='24px'
                h='24px'
                src={accordionItems.find((item) => item.label === type)?.icon as string}
            />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize='20px'
                lineHeight='140%'
                color='#000'
            >
                {title}
            </Text>
        </Box>
        <AppButton
            // border='1px solid var(--lime600)'
            borderColor='var(--lime600)'
            color='var(--lime600)'
        >
            Готовить
        </AppButton>
    </AppCard>
);
