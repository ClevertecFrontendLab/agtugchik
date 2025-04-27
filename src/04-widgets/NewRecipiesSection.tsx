import { memo } from 'react';

import { PageSection } from '~/04-widgets';
import { Carousel } from '~/05-features';
import { SectionTitle } from '~/07-shared/components';

export const NewRecipiesSection = memo(() => (
    <PageSection
        gridTemplateAreas={`"title"
                        "content"`}
    >
        <SectionTitle gridArea='title' title='Новые рецепты' />
        <Carousel gridArea='content' />
    </PageSection>
));
