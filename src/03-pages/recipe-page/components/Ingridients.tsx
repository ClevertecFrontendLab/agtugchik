import { HStack, Text, VStack } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

import { NumberStepper } from '~/07-shared/components/NumberStepper';

export const TableTitle = ({ text }: { text: string }) => (
    <Text
        fontFamily='var(--font-family)'
        fontWeight='700'
        fontSize='12px'
        lineHeight='133%'
        letterSpacing='0.05em'
        color='var(--lime600)'
    >
        {text}
    </Text>
);
export const TableItem = ({ text }: { text: ReactNode }) => (
    <Text
        fontFamily='var(--font-family)'
        fontWeight='500'
        fontSize='14px'
        lineHeight='143%'
        color='rgba(0, 0, 0, 0.92)'
    >
        {text}
    </Text>
);

interface Props {
    ingridients: {
        title: string;
        count: string;
        measureUnit: string;
    }[];
}

const Ingridients = ({ ingridients }: Props) => {
    const [portionCount, setPortionCount] = useState(1);

    return (
        <VStack maxW='668px' width='100%'>
            <HStack
                pl={{ lg: '24px', base: '8px' }}
                h='56px'
                justifyContent='space-between'
                width='100%'
            >
                <TableTitle text='ИНГРЕДИЕНТЫ' />
                <HStack>
                    <TableTitle text='ПОРЦИЙ' />
                    <NumberStepper portionCount={portionCount} setPortionCount={setPortionCount} />
                </HStack>
            </HStack>
            {ingridients.map((ingridient, index) => (
                <HStack
                    key={ingridient.title}
                    p={{ lg: '0 24px', base: '0 8px' }}
                    h='52px'
                    justifyContent='space-between'
                    width='100%'
                    bg={index % 2 === 1 ? 'rgba(0, 0, 0, 0.06)' : 'transparent'}
                >
                    <TableItem text={ingridient.title} />
                    <TableItem
                        text={
                            <>
                                <span data-test-id={`ingredient-quantity-${index}`}>
                                    {`${
                                        Number(ingridient.count)
                                            ? Number(ingridient.count) *
                                              (1 + (portionCount - 1) * 0.25)
                                            : ''
                                    }`}
                                </span>
                                {` ${ingridient.measureUnit}`}
                            </>
                        }
                    />
                </HStack>
            ))}
        </VStack>
    );
};

export default Ingridients;
