import { VStack } from '@chakra-ui/react';

import { PageHeader, PageSection } from '~/04-widgets';
import Blogers from '~/04-widgets/blogers/Blogers';
import { PageFooter } from '~/04-widgets/page-footer/PageFooter';
import { Carousel, JuicyList } from '~/05-features';
import { PageSubtitle, SectionTitle } from '~/07-shared/components';

export const HomePage = () => (
    <VStack as='article' w='100%' rowGap='40px' paddingLeft='24px'>
        <PageHeader title='Приятного аппетита!' />
        <PageSection>
            <SectionTitle title='Новые рецепты' />
            <Carousel />
        </PageSection>
        <PageSection>
            <SectionTitle title='Самое сочное' />
            <JuicyList />
        </PageSection>
        <PageSection borderRadius='16px' padding='24px' backgroundColor='var(--lime300)'>
            <SectionTitle
                fontSize='36px'
                lineHeight='111%'
                fontWeight={400}
                title='Кулинарные блоги'
            />
            <Blogers />
        </PageSection>
        <PageFooter>
            <SectionTitle title='Веганская кухня' gridArea='title' />
            <PageSubtitle
                gridArea='subtitle'
                textAlign='left'
                color='rgba(0, 0, 0, 0.64)'
                subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
        </PageFooter>
    </VStack>
);
