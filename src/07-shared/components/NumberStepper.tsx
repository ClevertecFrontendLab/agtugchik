import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

import stepDown from '~/07-shared/assets/svg/step-down.svg';
import stepUp from '~/07-shared/assets/svg/step-up.svg';

interface Props {
    portionCount: number;
    setPortionCount: React.Dispatch<React.SetStateAction<number>>;
}

export const NumberStepper = ({ portionCount, setPortionCount }: Props) => (
    <Flex
        border='1px solid #e2e8f0'
        borderRadius='6px'
        width='90px'
        height='40px'
        alignItems='center'
        justifyContent='space-between'
        position='relative'
        overflow='hidden'
    >
        <Box
            padding='0px 8px'
            flex='1'
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
        >
            <Text fontSize='16px' fontWeight='500'>
                {portionCount}
            </Text>
        </Box>

        <Flex
            direction='column'
            width='24px'
            height='40px'
            borderLeft='1px solid #e2e8f0'
            borderRadius='0 6px 6px 0'
            overflow='hidden'
        >
            <IconButton
                minW={0}
                aria-label='Increment'
                icon={
                    <Flex w='full' h='full' align='center' justify='center'>
                        <Image src={stepUp} alt='step-up' boxSize='12px' />
                    </Flex>
                }
                variant='unstyled'
                height='50%'
                borderBottom='1px solid #e2e8f0'
                borderRadius='0'
                onClick={() => setPortionCount((prev) => prev + 1)}
                _hover={{ bg: 'gray.100' }}
            />
            <IconButton
                minW={0}
                aria-label='Decrement'
                icon={
                    <Flex w='full' h='full' align='center' justify='center'>
                        <Image src={stepDown} alt='step-down' boxSize='12px' />
                    </Flex>
                }
                variant='unstyled'
                height='50%'
                borderRadius='0'
                onClick={portionCount > 1 ? () => setPortionCount((prev) => prev - 1) : undefined}
                _hover={{ bg: 'gray.100' }}
            />
        </Flex>
    </Flex>
);
