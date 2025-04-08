import { HStack } from '@chakra-ui/react';
import { memo } from 'react';

import { BlogerCard } from '~/05-features/BlogerCard';

import blogersInfo from './consts/blogers-info';

const Blogers = memo(() => (
    <HStack gridArea='content' maxW='100%'>
        {blogersInfo.map((bloger) => (
            <BlogerCard
                key={bloger.nickname}
                text={bloger.text}
                name={bloger.name}
                nickname={bloger.nickname}
                image={bloger.avatar}
            />
        ))}
    </HStack>
));

export default Blogers;
