import { Grid, GridProps, HStack, VStack } from '@chakra-ui/react';
import { memo } from 'react';

import fastRecipeCards from './consts/fast-recipe-cards';
import footerCardItems from './consts/footer-card-items';
import { FastRecipe } from './ui/FastRecipe';
import FooterCard from './ui/FooterCard';

interface Props extends GridProps {}

export const PageFooter = memo(({ children, ...props }: Props) => (
    <Grid
        as='section'
        width='100%'
        gap='24px'
        paddingTop='24px'
        borderTop='1px solid rgba(0, 0, 0, 0.08)'
        templateAreas={`"title subtitle"
                        "cards fast"`}
        templateColumns='1fr 1fr'
        templateRows='min-content 1fr'
        {...props}
    >
        {children}
        <HStack gridArea='cards' columnGap='24px'>
            {footerCardItems.map((item) => (
                <FooterCard key={item.title} {...item} />
            ))}
        </HStack>
        <VStack gridArea='fast' rowGap='12px'>
            {fastRecipeCards.map((item) => (
                <FastRecipe key={item.title} {...item} />
            ))}
        </VStack>
    </Grid>
));
