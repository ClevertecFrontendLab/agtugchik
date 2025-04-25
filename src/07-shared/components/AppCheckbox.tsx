import { Checkbox, CheckboxProps } from '@chakra-ui/react';

interface CustomCheckboxProps extends CheckboxProps {
    value: string;
    onChange: () => void;
    children: React.ReactNode;
}

export const AppCheckbox = ({ value, onChange, children, ...props }: CustomCheckboxProps) => (
    <Checkbox
        value={value}
        onChange={onChange}
        sx={{
            '.chakra-checkbox__control': {
                width: '20px',
                height: '20px',
                borderRadius: '2px',
                border: '2px solid #d7ff94',
                background: 'transparent',
                _checked: {
                    background: '#b1ff2e',
                    border: '1px solid #b1ff2e',
                },
                _hover: {
                    background: 'transparent',
                    borderColor: '#d7ff94',
                    _checked: {
                        background: '#b1ff2e',
                        borderColor: '#b1ff2e',
                    },
                },
                _focusVisible: {
                    boxShadow: 'none',
                },
                svg: {
                    display: 'none',
                },
            },
            '.chakra-checkbox__control[data-checked]': {
                svg: { display: 'block' },
            },
        }}
        fontFamily='var(--font-family)'
        fontWeight='400'
        fontSize='14px'
        lineHeight='143%'
        color='#1a202c'
        icon={<CustomCheckIcon />}
        {...props}
    >
        {children}
    </Checkbox>
);

const CustomCheckIcon = () => (
    <svg viewBox='0 0 24 24' width='14px' height='14px'>
        <path d='M20 6L9 17l-5-5' stroke='black' strokeWidth='2' fill='none' />
    </svg>
);
