import { HStack, Image } from '@chakra-ui/react';
import { memo } from 'react';

import logo1 from '~/07-shared/assets/svg/logo1.svg';
import logo2 from '~/07-shared/assets/svg/logo2.svg';

export const Logo = memo(() => (
    <HStack columnGap='7px' alignItems='end'>
        <Image src={logo1} alt='Logo 1' />
        <Image src={logo2} alt='Logo 2' />
    </HStack>
));
