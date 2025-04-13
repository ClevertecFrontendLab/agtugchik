import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Image,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { VerticalSubmenu } from './VerticalSabmenu';

export interface Props {
    label: string;
    icon: string;
    path: string;
    subroutes: readonly { label: string; path: string }[];
    'data-test-id'?: string;
}

export const AppAccordionItem = memo((props: Props) => {
    const { label, icon, path, subroutes } = props;
    const navigate = useNavigate();
    const dataTestId = props['data-test-id'];

    const onCLickHandler = () => {
        navigate(path);
    };

    return (
        <AccordionItem onClick={onCLickHandler} key={label} border='none'>
            <AccordionButton
                data-test-id={dataTestId}
                _focus={{ outline: 'none' }}
                _expanded={{
                    bg: 'var(--lime100)',
                    fontWeight: 700,
                    borderRadius: 0,
                }}
                w='100%'
                h='48px'
                bg='inherit'
                borderColor='white !important'
                color='black'
                padding='16px 0'
                gap='12px'
                whiteSpace='nowrap'
            >
                <Image color='black' src={icon} boxSize='24px' mr='2px' />
                {label}
                <AccordionIcon ml='auto' />
            </AccordionButton>

            <AccordionPanel padding='0' color='black'>
                {subroutes && subroutes.length > 0 && <VerticalSubmenu items={subroutes} />}
            </AccordionPanel>
        </AccordionItem>
    );
});
