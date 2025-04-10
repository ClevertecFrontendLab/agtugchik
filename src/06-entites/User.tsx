import { Avatar, Box, HStack, StackProps, Text } from '@chakra-ui/react';
import { memo } from 'react';

import avatar from '~/07-shared/assets/png/avatar.png';

interface Props extends StackProps {
    name: string;
    nickname: string;
    image: string;
}

export const User = memo(
    ({
        name = 'Екатерина Константинопольская',
        nickname = '@bake_and_pie',
        image = avatar,
        ...rest
    }: Props) => (
        <HStack
            display={{ lg: 'flex', base: 'none' }}
            height='100%'
            columnGap='12px'
            align='center'
            justifySelf='end'
            {...rest}
        >
            <Avatar size='md' name={name} src={image} />
            <Box display='flex' flexDirection='column' w='100%' overflow='hidden'>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize='18px'
                    lineHeight='156%'
                    color='#000'
                    isTruncated
                >
                    {name}
                </Text>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='143%'
                    color='rgba(0, 0, 0, 0.64)'
                    isTruncated
                >
                    {nickname}
                </Text>
            </Box>
        </HStack>
    ),
);
