import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import layoutConfig from '~/07-shared/consts/app-layout-config';

interface Props {
    children: ReactNode;
}

export const AppContainer = ({ children }: Props) => (
    <Box
        p={{
            lg: `${layoutConfig.header.height.xl} ${layoutConfig.sider.width} 0 ${layoutConfig.nav.width}`,
            base: `${layoutConfig.header.height.base} 0 ${layoutConfig.footer.height.base} 0`,
        }}
        w='full'
        overflowX='hidden'
        background='#fff'
    >
        {children}
    </Box>
);
