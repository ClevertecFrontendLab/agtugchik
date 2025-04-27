import { Heading, HeadingProps, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface AppCardTitleProps extends HeadingProps {
    searchBarValue?: string;
}

export const AppCardTitle = memo(({ children, searchBarValue, ...props }: AppCardTitleProps) => {
    const highlightText = (text: string) => {
        if (!searchBarValue) return text;

        const regex = new RegExp(`(${searchBarValue})`, 'ig');
        const parts = text.split(regex);

        return parts.map((part, idx) =>
            part.toLowerCase() === searchBarValue.toLowerCase() ? (
                <Text as='span' key={idx} color='var(--lime600)' fontWeight='bold'>
                    {part}
                </Text>
            ) : (
                <Text as='span' key={idx}>
                    {part}
                </Text>
            ),
        );
    };

    return (
        <Heading
            as='h3'
            fontFamily='var(--font-family)'
            fontWeight={500}
            fontSize={{ lg: '20px', base: '16px' }}
            lineHeight={{ lg: '140%', base: '150%' }}
            color='#000'
            mb='8px'
            w='100%'
            noOfLines={{ lg: 1, base: 2 }}
            sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: { lg: '2.8em', base: '3em' },
            }}
            {...props}
        >
            {typeof children === 'string' ? highlightText(children) : children}
        </Heading>
    );
});
