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
        <AccordionItem key={title} border='none'>
            <AccordionButton
                _focus={{ outline: 'none' }}
                _expanded={{ bg: 'var(--main-green300)', fontWeight: 700, borderRadius: 0 }}
                w='100%'
                h='48px'
                bg='inherit'
                borderColor='white !important'
                color='black'
                padding='16px 0'
                gap='12px'
                whiteSpace='nowrap'
            >
                <Image color='black' src={icon} boxSize='24px' mr='2pxs' />
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
