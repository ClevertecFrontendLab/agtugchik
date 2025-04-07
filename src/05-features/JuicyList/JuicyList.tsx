import { Flex } from '@chakra-ui/react';

import { HorizontalRecipeCard } from '~/06-entites';

import juicyItems from './consts/juicy-items';

export const JuicyList = () => (
    <Flex flexWrap='wrap' gap='24px'>
        {juicyItems.map((item) => (
            <HorizontalRecipeCard key={item.title} {...item} />
        ))}
    </Flex>
);
