import { Box, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import notFound from '~/07-shared/assets/png/not-found.png';
import layoutConfig from '~/07-shared/consts/app-layout-config';

export const NotFoundPage = () => (
    <Box
        as='main'
        h={{
            base: `calc(100vh - ${layoutConfig.header.height.base} - ${layoutConfig.footer.height.base})`,
            lg: `calc(100vh - ${layoutConfig.header.height.xl})`,
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='white'
        px={4}
    >
        <VStack>
            <Image
                src={notFound}
                alt='404 Error Illustration'
                maxW={{ base: '108px', lg: '280px' }}
                mb='32px'
            />
            <Text
                as='h1'
                fontFamily='var(--font-family)'
                fontWeight='700'
                fontSize='24px'
                lineHeight='133%'
                textAlign='center'
                color='#000'
                maxW={{ base: '240px', lg: '100%' }}
            >
                Упс! Такой страницы нет
            </Text>
            <Text
                fontFamily='var(--font-family)'
                fontWeight='400'
                fontSize='16px'
                lineHeight='150%'
                textAlign='center'
                color='rgba(0, 0, 0, 0.64)'
                maxW={{ base: '240px', lg: '100%' }}
            >
                Можете поискать другой рецепт{' '}
                <Link
                    data-test-id='error-page-go-home'
                    as={RouterLink}
                    to='/'
                    textDecor='underline'
                >
                    здесь
                </Link>
                .
            </Text>
        </VStack>
    </Box>
);
