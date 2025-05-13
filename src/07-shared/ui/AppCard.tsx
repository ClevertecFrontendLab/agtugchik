import { Card, CardProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppCard = memo((props: CardProps) => (
    <Card
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        overflow='hidden'
        bg='#fff'
        boxShadow='none'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
        {...props}
    />
));
