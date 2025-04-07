import { VStack } from '@chakra-ui/react';
import { memo } from 'react';

import { SearchBar } from '~/05-features';
import { PageSubtitle, PageTitle } from '~/07-shared/components';

interface Props {
    title: string;
    subtitle?: string;
}

export const PageHeader = memo(({ title, subtitle }: Props) => (
    <VStack as='section' w='100%' align='center' spacing='32px' mt='32px'>
        <PageTitle title={title} />
        {subtitle && <PageSubtitle subtitle={subtitle} />}
        <SearchBar />
    </VStack>
));
