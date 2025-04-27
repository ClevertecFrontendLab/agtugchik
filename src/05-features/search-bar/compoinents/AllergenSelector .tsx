import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react';
import { useState } from 'react';

import { AddCustomAllergen } from './AddCustomAllergen';
import { AllergenOptionsList } from './AllergenOptionsList';
import { SelectedAllergens } from './SelectedAllergens';

const allergenOptions = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
];

export const AllergenSelector = () => {
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [customAllergen, setCustomAllergen] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleAllergen = (value: string) => {
        setSelectedAllergens((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
        );
    };

    const addCustomAllergen = () => {
        if (customAllergen.trim() && !selectedAllergens.includes(customAllergen)) {
            setSelectedAllergens((prev) => [...prev, customAllergen.trim()]);
            setCustomAllergen('');
        }
    };

    return (
        <Box>
            <Popover
                placement='bottom-start'
                closeOnBlur={false}
                isOpen={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
            >
                <PopoverTrigger>
                    <Button
                        border='1px solid'
                        borderColor={selectedAllergens.length ? '#c4ff61' : 'rgba(0, 0, 0, 0.08)'}
                        borderRadius='6px'
                        width='234px'
                        minHeight='40px'
                        bg='white'
                        color='black'
                        fontWeight={500}
                        fontSize='16px'
                        lineHeight='150%'
                        textAlign='left'
                        _focus={{ boxShadow: 'none' }}
                        display='flex'
                        flexWrap='wrap'
                        alignItems='center'
                        gap='4px'
                        px='8px'
                        py='8px'
                        height='auto'
                        position='relative'
                        justifyContent='flex-start'
                    >
                        <SelectedAllergens selectedAllergens={selectedAllergens} />
                        <Box ml='auto' display='flex' alignItems='center'>
                            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </Box>
                    </Button>
                </PopoverTrigger>

                <PopoverContent
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='4px'
                    p='4px 0'
                    background='#fff'
                    boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    width='234px'
                    mt='0'
                    _focus={{ boxShadow: 'none' }}
                >
                    <PopoverBody p='0'>
                        <AllergenOptionsList
                            allergenOptions={allergenOptions}
                            selectedAllergens={selectedAllergens}
                            toggleAllergen={toggleAllergen}
                        />
                        <AddCustomAllergen
                            customAllergen={customAllergen}
                            setCustomAllergen={setCustomAllergen}
                            addCustomAllergen={addCustomAllergen}
                        />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};
