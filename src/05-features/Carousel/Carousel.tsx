import { HStack, StackProps } from '@chakra-ui/react';
import { memo } from 'react';

import { NewRecipeCard } from '~/06-entites';

import newRecipies from './consts/new-recipies';

export const Carousel = memo((props: StackProps) => (
    <HStack
        width='100%'
        spacing={{ xl: '24px', base: '12px' }}
        overflowX='hidden'
        css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            scrollbarWidth: 'none',
        }}
        {...props}
    >
        {newRecipies.concat(newRecipies).map((recipe, index) => (
            <NewRecipeCard key={index} {...recipe} />
        ))}
    </HStack>
));
