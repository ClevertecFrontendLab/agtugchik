import { ViewIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends InputProps {
    name: string;
    label: string;
    helperText?: string;
    showTogglePassword?: boolean;
}

export const FormInput = ({
    name,
    label,
    helperText,
    showTogglePassword = false,
    type = 'text',
    ...rest
}: Props) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordType = type === 'password' && showTogglePassword;

    const handleMouseDown = () => setIsPasswordVisible(true);
    const handleMouseUp = () => setIsPasswordVisible(false);

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel
                htmlFor={name}
                fontFamily='var(--font-family)'
                fontWeight='400'
                fontSize='16px'
                lineHeight='150%'
                color='#000'
            >
                {label}
            </FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <InputGroup>
                        <Input
                            border='1px solid #d7ff94'
                            borderRadius='6px'
                            padding='0px 16px'
                            width='100%'
                            height='48px'
                            bg='#fff'
                            id={name}
                            {...field}
                            type={isPasswordType && !isPasswordVisible ? 'password' : 'text'}
                            {...rest}
                        />
                        {isPasswordType && (
                            <InputRightElement h='48px' w='48px'>
                                <IconButton
                                    h='48px'
                                    w='48px'
                                    aria-label='Показать пароль при удержании'
                                    size='sm'
                                    variant='ghost'
                                    icon={<ViewIcon />}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                    onBlur={handleMouseUp}
                                    tabIndex={-1}
                                />
                            </InputRightElement>
                        )}
                    </InputGroup>
                )}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
