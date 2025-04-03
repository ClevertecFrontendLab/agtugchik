import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Image,
} from '@chakra-ui/react';
import { memo } from 'react';

export interface Props {
    title: string;
    icon: string;
}

export const AppAccordionItem = memo(({ props }: { props: Props }) => {
    const { title, icon } = props;
    return (
        <AccordionItem key={title}>
            <AccordionButton
                _focus={{ outline: 'none' }}
                _expanded={{ bg: '#eaffc7', fontWeight: 700, borderRadius: 0 }}
                w='100%'
                h={48}
                bg='inherit'
                borderColor='white !important'
                color='black'
                padding='16px 8px 16px 0'
                gap={12}
                whiteSpace='nowrap'
            >
                <Image color='black' src={icon} boxSize={24} mr={2} />
                {title}
                <AccordionIcon ml='auto' />
            </AccordionButton>
            <AccordionPanel pb={4} color='black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    );
});
