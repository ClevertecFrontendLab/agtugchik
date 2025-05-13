import { AuthLayout } from '~/04-widgets';
import { RegisterForm } from '~/05-features';

export const RegisterPage = () => (
    <AuthLayout activeTab='register'>
        <RegisterForm />
    </AuthLayout>
);
