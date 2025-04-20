import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

import sbi from '~/07-shared/assets/svg/search-button-icon.svg';
import { AppButton } from '~/07-shared/components';
import { AppSwitch } from '~/07-shared/components';
import { SearchInput } from '~/07-shared/components';

import { AllergenSelector } from './compoinents/AllergenSelector ';

export const SearchBar = memo(() => (
    <VStack spacing='16px' width='100%'>
        <HStack
            spacing='12px'
            width='100%'
            height={{ lg: '48px', base: '32px' }}
            maxW={{ lg: '518px', base: '448px' }}
        >
            <AppButton h='100%' minW={0} w={{ lg: '48px', base: '32px' }}>
                <Image
                    width={{ lg: '24px', base: '14px' }}
                    height={{ lg: '24px', base: '14px' }}
                    src={sbi}
                />
            </AppButton>
            <SearchInput />
        </HStack>

        <HStack display={{ lg: 'flex', base: 'none' }} spacing='16px'>
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
            <AllergenSelector />
        </HStack>
    </VStack>
));
