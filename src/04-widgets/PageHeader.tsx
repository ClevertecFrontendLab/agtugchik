import { VStack } from '@chakra-ui/react';
import { memo } from 'react';

import { useAppSelector } from '~/01-app/store/hooks';
import { searchSliceSelector } from '~/01-app/store/search-slice';
import { SearchBar } from '~/05-features';
import { AppSpinner, PageSubtitle, PageTitle } from '~/07-shared/components';

interface Props {
    title: string;
    subtitle?: string;
}

export const PageHeader = memo(({ title, subtitle }: Props) => {
    const { searchLoading } = useAppSelector(searchSliceSelector);

    return (
        <VStack
            as='section'
            w='100%'
            h='248px'
            maxW='898px'
            align='center'
            spacing={{ lg: '32px', base: '16px' }}
            mt={{ lg: '32px', base: '0' }}
        >
            <VStack>
                <PageTitle title={title} />
                {subtitle && <PageSubtitle subtitle={subtitle} />}
            </VStack>
            <AppSpinner
                data-test-id='loader-search-block'
                display={searchLoading ? 'flex' : 'none'}
            />
            <SearchBar display={searchLoading ? 'none' : 'flex'} />
        </VStack>
    );
});
