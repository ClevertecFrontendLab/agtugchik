import { Grid, GridItem, Text } from '@chakra-ui/react';

interface ValueBoxProps {
    title: string;
    value: number;
    unit: string;
}

export const ValueBox = ({ title, value, unit }: ValueBoxProps) => (
    <Grid
        templateColumns={{ base: '1fr 1fr 1fr', md: '1fr' }}
        templateRows={{ base: '1fr', md: 'auto auto auto' }}
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='16px'
        padding={{ md: '16px', base: '12px' }}
        width={{ md: '149px', base: '100%' }}
        height={{ md: '136px', base: '64px' }}
        alignItems='center'
        justifyItems='center'
    >
        <GridItem w='118px'>
            <Text
                fontFamily='var(--font-family)'
                fontWeight={400}
                fontSize='14px'
                lineHeight='143%'
                textAlign={{ md: 'center', base: 'start' }}
                color='rgba(0, 0, 0, 0.48)'
            >
                {title}
            </Text>
        </GridItem>

        <GridItem w='118px'>
            <Text
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize='36px'
                lineHeight='111%'
                textAlign='center'
                color='#134b00'
            >
                {value}
            </Text>
        </GridItem>

        <GridItem w='61px'>
            <Text
                fontFamily='var(--font-family)'
                fontWeight={600}
                fontSize='14px'
                lineHeight='143%'
                textAlign={{ md: 'center', base: 'start' }}
                color='rgba(0, 0, 0, 0.92)'
            >
                {unit}
            </Text>
        </GridItem>
    </Grid>
);
