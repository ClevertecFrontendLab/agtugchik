import { EditIcon } from '@chakra-ui/icons';
import { Button, Icon, Text, VStack } from '@chakra-ui/react';

export const CreateRecipeButton = () => (
    <VStack
        w='208px'
        h='208px'
        justify='center'
        align='center'
        borderRadius='50%'
        bg='radial-gradient(circle 100px at center, var(--lime100) 0%, white 100%)'
    >
        <Button
            w='48px'
            h='48px'
            borderRadius='50px'
            p='0 12px'
            bg='black'
            _hover={{ bg: 'blackAlpha.800' }}
        >
            <Icon as={EditIcon} color='var(--lime50)' />
        </Button>
        <Text
            fontFamily='var(--font-family)'
            fontWeight={400}
            fontSize='12px'
            lineHeight='133%'
            textAlign='center'
            color='rgba(0, 0, 0, 0.64)'
        >
            Записать рецепт
        </Text>
    </VStack>
);
