import './styles/index.scss';

import {
    AppContainer,
    AuthGuard,
    BurgerMenu,
    FilterDrawer,
    Footer,
    Header,
    Navigation,
    Sider,
} from '~/04-widgets';
import { AppLoader, ErrorNotification } from '~/05-features';

import { Router } from './router';

const App = () => (
    <AppContainer>
        <AppLoader />
        <ErrorNotification />
        <AuthGuard>
            <BurgerMenu />
            <FilterDrawer />
            <Header />
            <Navigation />
            <Sider />
            <Footer />
        </AuthGuard>
        <Router />
    </AppContainer>
);

export default App;
