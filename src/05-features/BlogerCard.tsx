import { CardBody, CardHeader } from '@chakra-ui/react';

import { AppCard, AppCardText } from '~/07-shared/ui';

import { User } from '../06-entites/User';

interface Props {
    text: string;
    name: string;
    nickname: string;
    image: string;
}

export const BlogerCard = ({ text, name, nickname, image }: Props) => (
    <AppCard w='100%'>
        <CardHeader
            padding={{
                xl: '24px 24px 16px 24px',
                lg: '16px 16px 8px 16px',
                base: '20px 16px 12px 16px',
            }}
        >
            <User display='flex' width='100%' name={name} nickname={nickname} image={image} />
        </CardHeader>
        <CardBody
            padding={{
                xl: '12px 24px 20px 24px',
                lg: '8px 16px 16px 16px',
                base: '8px 16px 12px 16px',
            }}
        >
            <AppCardText
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {text}
            </AppCardText>
        </CardBody>
    </AppCard>
);
