import { CloseIcon } from '@chakra-ui/icons';
import { Box, BoxProps, HStack, IconButton, StackProps, Text } from '@chakra-ui/react';

interface TagProps extends BoxProps {
    name: string;
}

export const Tag = ({ name, ...props }: TagProps) => (
    <Box
        display='inline-flex'
        alignItems='center'
        border='1px solid var(--lime400)'
        borderRadius='6px'
        padding='0px 8px'
        background='var(--lime100)'
        height='24px'
        {...props}
    >
        <Text
            fontFamily='var(--font-family)'
            fontWeight='500'
            fontSize='14px'
            lineHeight='143%'
            color='var(--lime700)'
        >
            {name}
        </Text>

        <IconButton
            aria-label='Remove tag'
            icon={<CloseIcon />}
            size='xs'
            variant='ghost'
            color='var(--lime700)'
            marginLeft='6px'
            _hover={{ background: 'transparent' }}
            _active={{ background: 'transparent' }}
        />
    </Box>
);

interface TagsProps extends StackProps {
    tagNames: string[];
}

export const Tags = ({ tagNames, ...props }: TagsProps) => (
    <HStack w='100%' maxW='100%' flexWrap='wrap' {...props}>
        {tagNames.map((name) => (
            <Tag data-test-id='filter-tag' name={name} />
        ))}
    </HStack>
);
