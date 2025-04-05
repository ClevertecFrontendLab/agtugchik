import { Box, Flex } from '@chakra-ui/react';

import { SearchBar } from '~/05-features';
import { PageSubtitle } from '~/07-shared/components';
import { PageTitle } from '~/07-shared/components';

interface Props {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: Props) => (
    <Box width='100%' maxWidth='898px'>
        <Flex direction='column' align='center' rowGap='32px'>
            <PageTitle title={title} />
            {subtitle && <PageSubtitle subtitle={subtitle} />}
            <SearchBar />
        </Flex>
    </Box>
);
