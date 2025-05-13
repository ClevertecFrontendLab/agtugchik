import { AuthLayout } from '~/04-widgets';
import { LoginForm } from '~/05-features';

export const LoginPage = () => (
    <AuthLayout activeTab='login'>
        <LoginForm />
    </AuthLayout>
);
