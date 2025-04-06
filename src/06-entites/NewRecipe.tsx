import { Card, CardBody, CardFooter, HStack, Image, Text } from '@chakra-ui/react';

import accordionItems from '~/04-widgets/navigation/consts/accordion-item-props';
import bookmark from '~/07-shared/assets/svg/bookmark.svg';
import heartEyes from '~/07-shared/assets/svg/heart-eyes.svg';
import { StatIcon } from '~/07-shared/components';

interface Props {
    title: string;
    text: string;
    image: string;
    type: string;
    bookmarks: number;
    likes: number;
}

export const NewRecipe = (props: Props) => {
    const { title, image, text, type, bookmarks, likes } = props;
    return (
        <Card
            width='322px'
            minWidth='322px'
            height='414px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            overflow='hidden'
            bg='#fff'
            boxShadow='none'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Image src={image} width='100%' height='auto' objectFit='cover' alt='Card image' />
            <CardBody padding='24px'>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize='20px'
                    lineHeight='140%'
                    color='#000'
                    mb='8px'
                    isTruncated
                >
                    {title}
                </Text>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='143%'
                    color='#000'
                    noOfLines={3}
                >
                    {text}
                </Text>
            </CardBody>
            <CardFooter paddingTop='0' justifyContent='space-between'>
                <HStack
                    borderRadius='4px'
                    padding='2px 8px'
                    width='max-content'
                    height='24px'
                    background='#d7ff94'
                    spacing='4px'
                >
                    <Image
                        w='14px'
                        h='14px'
                        src={accordionItems.find((item) => item.title === type)?.icon}
                    />
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight='400'
                        fontSize='14px'
                        lineHeight='143%'
                        color='black'
                    >
                        {type}
                    </Text>
                </HStack>
                <HStack>
                    {!!bookmarks && <StatIcon icon={bookmark} count={bookmarks} type='card' />}
                    {!!likes && <StatIcon icon={heartEyes} count={likes} type='card' />}
                </HStack>
            </CardFooter>
        </Card>
    );
};
