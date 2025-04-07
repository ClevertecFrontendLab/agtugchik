import { CardBody, CardFooter } from '@chakra-ui/react';

import accordionItems from '~/04-widgets/navigation/consts/accordion-item-props';
import { RecipeStatIcons } from '~/06-entites';
import { AppBadge, AppCard, AppCardText, AppCardTitle } from '~/07-shared/components';

interface Props {
    title: string;
    text: string;
    type: string;
    bookmarks: number;
    likes: number;
}

const FooterCard = ({ title, text, type, bookmarks, likes }: Props) => (
    <AppCard maxW='322px' h='100%'>
        <CardBody padding='24px'>
            <AppCardTitle>{title}</AppCardTitle>
            <AppCardText>{text}</AppCardText>
        </CardBody>
        <CardFooter padding='0px 24px 20px 24px' justify='space-between'>
            <AppBadge
                label={type}
                icon={accordionItems.find((item) => item.title === type)?.icon as string}
                bgColor='var(--lime50)'
            />
            <RecipeStatIcons bookmarks={bookmarks} likes={likes} />
        </CardFooter>
    </AppCard>
);

export default FooterCard;
