import { CardBody, CardHeader } from '@chakra-ui/react';

import { AppCard, AppCardText } from '~/07-shared/components';

import { User } from '../06-entites/User';

interface Props {
    text: string;
    name: string;
    nickname: string;
    image: string;
}

export const BlogerCard = ({ text, name, nickname, image }: Props) => (
    <AppCard maxW='426px' w='100%'>
        <CardHeader>
            <User width='100%' name={name} nickname={nickname} image={image} />
        </CardHeader>
        <CardBody>
            <AppCardText>{text}</AppCardText>
        </CardBody>
    </AppCard>
);
