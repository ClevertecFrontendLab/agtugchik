import { Grid, GridProps, VStack } from '@chakra-ui/react';
import { memo } from 'react';

import fastRecipeCards from './consts/fast-recipe-cards';
import footerCardItems from './consts/footer-card-items';
import { FastRecipe } from './ui/FastRecipe';
import FooterCard from './ui/FooterCard';

interface Props extends GridProps {}

export const PageFooter = memo(({ children, ...props }: Props) => (
    <Grid
        as='section'
        maxW='100%'
        width='100%'
        gap={{ xl: '24px', lg: '24px 16px', base: '16px' }}
        paddingTop='24px'
        borderTop='1px solid rgba(0, 0, 0, 0.08)'
        templateAreas={{
            xl: `"title subtitle"
                "cards fast"`,
            lg: `"title subtitle subtitle"
                "cards cards fast"`,
            md: `"title title title"
                "subtitle subtitle subtitle"
                "cards cards fast"`,
            base: `"title"
                "subtitle"
                "cards"
                "fast"`,
        }}
        templateColumns={{ xl: '1fr 1fr', md: '1fr 1fr 1fr', base: '1fr' }}
        templateRows={{ xl: 'min-content 1fr', md: 'min-content min-content 1fr' }}
        {...props}
    >
        {children}
        <Grid
            gridArea='cards'
            gap={{ xl: '24px', base: '16px' }}
            gridTemplateColumns={{ md: '1fr 1fr', base: '1fr' }}
        >
            {footerCardItems.map((item) => (
                <FooterCard key={item.title} {...item} />
            ))}
        </Grid>
        <VStack gridArea='fast' rowGap='12px' w='100%'>
            {fastRecipeCards.map((item) => (
                <FastRecipe key={item.title} {...item} />
            ))}
        </VStack>
    </Grid>
));
