import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { SearchBar } from '~/05-features';
import { PageSubtitle } from '~/07-shared/components';
import { PageTitle } from '~/07-shared/components';

interface Props {
    title: string;
    subtitle?: string;
}

export const PageHeader = memo(({ title, subtitle }: Props) => (
    <Flex w='100%' direction='column' align='center' rowGap='32px'>
        <PageTitle title={title} />
        {subtitle && <PageSubtitle subtitle={subtitle} />}
        <SearchBar />
    </Flex>
));
