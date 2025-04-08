import { CardBody, CardFooter, CardProps } from '@chakra-ui/react';

import accordionItems from '~/04-widgets/navigation/consts/accordion-item-props';
import { RecipeStatIcons } from '~/06-entites';
import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';

interface Props extends CardProps {
    title: string;
    text: string;
    type: string;
    bookmarks: number;
    likes: number;
}

const FooterCard = ({ title, text, type, bookmarks, likes }: Props) => (
    <AppCard w='100%' h='100%' minW='0'>
        <CardBody padding={{ xl: '24px', lg: '16px 16px 24px 16px' }}>
            <AppCardTitle>{title}</AppCardTitle>
            <AppCardText>{text}</AppCardText>
        </CardBody>
        <CardFooter
            padding={{ xl: '0px 24px 20px 24px', lg: '0px 16px 16px 16px' }}
            justify='space-between'
        >
            <AppBadge
                label={type}
                icon={accordionItems.find((item) => item.label === type)?.icon as string}
                bgColor='var(--lime50)'
            />
            <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
        </CardFooter>
    </AppCard>
);

export default FooterCard;
