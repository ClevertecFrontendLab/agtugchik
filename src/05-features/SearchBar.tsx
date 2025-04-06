import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Button,
    HStack,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from '@chakra-ui/react';
import { memo } from 'react';

import sbi from '~/07-shared/assets/svg/search-button-icon.svg';
import { AppButton } from '~/07-shared/components';
import { AppSwitch } from '~/07-shared/components';
import { SearchInput } from '~/07-shared/components';

export const SearchBar = memo(() => (
    <VStack spacing='16px' align='flex-start'>
        <HStack spacing='12px' width='518px'>
            <AppButton h='48px'>
                <Image p='0 12px' src={sbi} />
            </AppButton>
            <SearchInput />
        </HStack>

        <HStack spacing='16px'>
            <HStack px='8px' height='36px' width='268px' justify='space-between' flex='1'>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize='16px'
                    lineHeight='150%'
                    color='#000'
                >
                    Исключить мои аллергены
                </Text>
                <AppSwitch />
            </HStack>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='6px'
                    width='234px'
                    height='40px'
                    bg='white'
                    color='black'
                    fontWeight={500}
                    fontSize='16px'
                    lineHeight='150%'
                    textAlign='left'
                    _focus={{ boxShadow: 'none' }}
                >
                    Выберите из списка...
                </MenuButton>
                <MenuList
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='6px'
                    width='234px'
                    py={1}
                >
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    </VStack>
));
