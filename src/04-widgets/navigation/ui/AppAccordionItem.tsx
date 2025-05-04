import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Image,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { Category } from '~/07-shared/types/api';

import { VerticalSubmenu } from './VerticalSabmenu';

export const AppAccordionItem = memo((props: Category) => {
    const { title, icon, category, subCategories } = props;
    const navigate = useNavigate();

    const onCLickHandler = () => {
        navigate(`/${category}/${subCategories[0].category}`);
    };

    return (
        <AccordionItem ml='-4px' onClick={onCLickHandler} key={title} border='none'>
            <AccordionButton
                data-test-id={category === 'vegan' ? 'vegan-cuisine' : ''}
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
                {title}
                <AccordionIcon ml='auto' />
            </AccordionButton>

            <AccordionPanel padding='0' color='black'>
                <VerticalSubmenu category={category} items={subCategories} />
            </AccordionPanel>
        </AccordionItem>
    );
});
