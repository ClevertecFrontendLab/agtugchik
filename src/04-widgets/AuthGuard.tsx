import { ReactNode } from 'react';

import { isAuthSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';

interface Props {
    children: ReactNode;
}

export const AuthGuard = ({ children }: Props) => {
    const isAuth = useAppSelector(isAuthSelector);
    return <>{isAuth ? children : null}</>;
};
