import { Navigate, useParams } from 'react-router';

import { AppPaths } from '~/01-app/router/consts/app-paths';

export const VerificationPage = () => {
    const { emailVerified } = useParams();
    console.log(emailVerified);

    return <Navigate to={AppPaths.LOGIN} />;
};
