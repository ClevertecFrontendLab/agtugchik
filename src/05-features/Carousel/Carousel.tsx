import { HStack } from '@chakra-ui/react';
import { memo } from 'react';

import { NewRecipeCard } from '~/06-entites';

import newRecipies from './consts/new-recipies';

export const Carousel = memo(() => (
    <HStack
        gridArea='content'
        width='100%'
        spacing={{ xl: '24px', lg: '12px' }}
        overflowX='hidden'
        css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            scrollbarWidth: 'none',
        }}
    >
        {newRecipies.map((recipe, index) => (
            <NewRecipeCard key={index} {...recipe} />
        ))}
    </HStack>
));
