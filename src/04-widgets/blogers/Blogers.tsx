import { Stack, StackProps } from '@chakra-ui/react';
import { memo } from 'react';

import { BlogerCard } from '~/05-features/BlogerCard';

import blogersInfo from './consts/blogers-info';

const Blogers = memo((props: StackProps) => (
    <Stack maxW='100%' minW='100%' {...props} flexDirection={{ md: 'row', base: 'column' }}>
        {blogersInfo.map((bloger) => (
            <BlogerCard
                key={bloger.nickname}
                text={bloger.text}
                name={bloger.name}
                nickname={bloger.nickname}
                image={bloger.avatar}
            />
        ))}
    </Stack>
));

export default Blogers;
