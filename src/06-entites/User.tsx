import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import avatar from '~/07-shared/assets/png/avatar.png';

export const User = memo(() => (
    <Flex height='100%' columnGap='12px' align='center' justifySelf='end'>
        <Avatar size='md' name='Екатерина Константинопольская' src={avatar} />
        <Box display='flex' flexDirection='column'>
            <Text
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize='18px'
                lineHeight='156%'
                color='#000'
            >
                Екатерина Константинопольская
            </Text>
            <Text
                fontFamily='var(--font-family)'
                fontWeight={400}
                fontSize='14px'
                lineHeight='143%'
                color='rgba(0, 0, 0, 0.64)'
            >
                @bake_and_pie
            </Text>
        </Box>
    </Flex>
));
