import { HStack, Portal, StackProps } from '@chakra-ui/react';
import { memo } from 'react';

import { NewRecipeCard } from '~/06-entites';

import newRecipies from './consts/new-recipies';
import { ArrowButton } from './ui/ArrowButton';

export const Carousel = memo((props: StackProps) => (
    <HStack
        position='relative'
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
        <Portal>
            <ArrowButton type='left' />
            <ArrowButton type='right' />
        </Portal>
        {newRecipies.concat(newRecipies).map((recipe, index) => (
            <NewRecipeCard key={index} {...recipe} />
        ))}
    </HStack>
));
