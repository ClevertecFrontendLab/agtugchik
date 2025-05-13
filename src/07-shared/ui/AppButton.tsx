import { Button, ButtonProps } from '@chakra-ui/react';

type AppButtonType = 'default' | 'green';

interface AppButtonProps extends ButtonProps {
    buttonType?: AppButtonType;
}

export const AppButton = ({ buttonType = 'default', ...props }: AppButtonProps) => {
    const isGreen = buttonType === 'green';

    return (
        <Button
            minW='0px'
            fontFamily='var(--font-family)'
            fontWeight={600}
            fontSize={{ base: '12px', lg: '14px' }}
            lineHeight={{ base: '133%', lg: '143%' }}
            _focus={{ outline: 'none' }}
            _hover={{
                borderColor: isGreen ? 'var(--lime600)' : 'rgba(0, 0, 0, 0.48)',
                backgroundColor: isGreen ? 'var(--lime500)' : undefined,
            }}
            border='1px solid'
            borderColor={isGreen ? 'var(--lime400)' : 'rgba(0, 0, 0, 0.48)'}
            backgroundColor={isGreen ? 'var(--lime400)' : 'white'}
            color='black'
            padding={0}
            variant='outline'
            {...props}
        />
    );
};
