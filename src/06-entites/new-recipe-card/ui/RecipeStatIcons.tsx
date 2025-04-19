import { HStack, StackProps } from '@chakra-ui/react';
import { memo } from 'react';

import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import heartEyes from '~/07-shared/assets/svg/heart-eyes.svg';
import { StatIcon } from '~/07-shared/components';

interface Props extends StackProps {
    bookmarks: number;
    likes: number;
}

export const RecipeStatIcons = memo(({ bookmarks, likes, ...props }: Props) => (
    <HStack h='24px' {...props} spacing='8px'>
        {!!bookmarks && <StatIcon icon={bookmark} count={bookmarks} type='card' />}
        {!!likes && <StatIcon icon={heartEyes} count={likes} type='card' />}
    </HStack>
));
