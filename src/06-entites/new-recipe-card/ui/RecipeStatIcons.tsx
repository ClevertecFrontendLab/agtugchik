import { HStack } from '@chakra-ui/react';
import { memo } from 'react';

import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import heartEyes from '~/07-shared/assets/svg/heart-eyes.svg';
import { StatIcon } from '~/07-shared/components';

interface Props {
    bookmarks: number;
    likes: number;
}

export const RecipeStatIcons = memo(({ bookmarks, likes }: Props) => (
    <HStack>
        {!!bookmarks && <StatIcon icon={bookmark} count={bookmarks} type='card' />}
        {!!likes && <StatIcon icon={heartEyes} count={likes} type='card' />}
    </HStack>
));
