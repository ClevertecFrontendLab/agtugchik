import { HStack, Image, Text, VStack } from '@chakra-ui/react';

import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import heartEyes from '~/07-shared/assets/svg/heart-eyes.svg';
import users from '~/07-shared/assets/svg/users.svg';

export const StatsIcons = () => (
    <VStack spacing='24px' width='208px' height='200px' align='center' justify='center'>
        <HStack spacing='8px' width='87px' height='40px' align='center' justify='center'>
            <Image src={bookmark} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize='16px'
                lineHeight='150%'
                color='#2db100'
            >
                185
            </Text>
        </HStack>

        <HStack spacing='8px' width='87px' height='40px' align='center' justify='center'>
            <Image src={users} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize='16px'
                lineHeight='150%'
                color='#2db100'
            >
                589
            </Text>
        </HStack>

        <HStack spacing='8px' width='87px' height='40px' align='center' justify='center'>
            <Image src={heartEyes} />
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize='16px'
                lineHeight='150%'
                color='#2db100'
            >
                587
            </Text>
        </HStack>
    </VStack>
);
