import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { AddCustomValue } from './components/AddCustomValue';
import { OptionsList } from './components/OptionList';
import { SelectedValues } from './components/SelectedValues';

interface Props {
    options: { name: string; dataTestId: string }[];
    placeholder: string;
    w?: string;
    dataTestId?: string;
    isDisabled?: boolean;
    withAddValue?: boolean;
    selectedValues: string[];
    toggleValue: (value: string) => void;
    isActivePopover?: boolean;
    withTags?: boolean;
}

export const AppSelector = ({
    options,
    placeholder,
    w,
    dataTestId,
    isDisabled,
    withAddValue = false,
    selectedValues,
    toggleValue,
    isActivePopover = true,
    withTags = true,
}: Props) => {
    const [customValue, setCustomValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const addCustomValue = () => {
        if (customValue.trim() && !selectedValues.includes(customValue)) {
            toggleValue(customValue);
            setCustomValue('');
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
                        ref={buttonRef}
                        isDisabled={isDisabled}
                        data-test-id={dataTestId}
                        border='1px solid'
                        borderColor={
                            selectedValues.length && withTags ? '#c4ff61' : 'rgba(0, 0, 0, 0.08)'
                        }
                        borderRadius='6px'
                        w={w || '100%'}
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
                        <SelectedValues
                            isActivePopover={isActivePopover}
                            placeholder={placeholder}
                            selectedValues={selectedValues}
                            withTags={withTags}
                        />
                        <Box ml='auto' display='flex' alignItems='center'>
                            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </Box>
                    </Button>
                </PopoverTrigger>

                {isActivePopover && (
                    <PopoverContent
                        w={buttonRef.current?.offsetWidth || 'auto'}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='4px'
                        p='4px 0'
                        background='#fff'
                        boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                        mt='-8px'
                        _focus={{ boxShadow: 'none' }}
                    >
                        <PopoverBody p='0' data-test-id='allergens-menu'>
                            <OptionsList
                                options={options}
                                selectedValues={selectedValues}
                                toggleValue={toggleValue}
                            />
                            {withAddValue && (
                                <AddCustomValue
                                    customValue={customValue}
                                    setCustomValue={setCustomValue}
                                    addCustomValue={addCustomValue}
                                />
                            )}
                        </PopoverBody>
                    </PopoverContent>
                )}
            </Popover>
        </Box>
    );
};
