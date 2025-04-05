import { Flex, GridItem } from '@chakra-ui/react';
import { memo } from 'react';

import { User } from '~/06-entites';
import { Logo } from '~/07-shared/components';

export const Header = memo(() => (
    <GridItem area='header'>
        <Flex
            as='header'
            px='10px'
            py='16px'
            w='100%'
            h='80px'
            bg='#ffffd3'
            align='center'
            justify='space-between'
        >
            <Logo />
            <User />
        </Flex>
    </GridItem>
));
