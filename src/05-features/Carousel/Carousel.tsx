import { HStack } from '@chakra-ui/react';
import { memo } from 'react';

import { NewRecipe } from '~/06-entites';

import newRecipies from './consts/new-recipies';

export const Carousel = memo(() => (
    <HStack
        width='100%'
        spacing='16px'
        overflowX='hidden'
        css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            scrollbarWidth: 'none',
        }}
        px='24px'
    >
        {newRecipies.map((recipe, index) => (
            <NewRecipe key={index} {...recipe} />
        ))}
    </HStack>
));
