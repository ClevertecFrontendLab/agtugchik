import { Box, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import notFound from '~/07-shared/assets/png/not-found.png';

export const NotFoundPage = () => (
    <Box
        as='main'
        minH='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='white'
        px={4}
    >
        <VStack spacing={6}>
            <Image src={notFound} alt='404 Error Illustration' maxW='280px' />
            <Text
                as='h1'
                fontFamily='var(--font-family)'
                fontWeight='700'
                fontSize='24px'
                lineHeight='133%'
                textAlign='center'
                color='#000'
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
