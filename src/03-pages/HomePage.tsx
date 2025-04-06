import { VStack } from '@chakra-ui/react';

import { PageHeader } from '~/04-widgets';
import { Carousel } from '~/05-features';

export const HomePage = () => (
    <VStack w='100%'>
        <PageHeader title='Приятного аппетита!' />
        <Carousel />
    </VStack>
);
