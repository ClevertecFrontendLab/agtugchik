import './styles/index.scss';

import {
    AppContainer,
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
        <BurgerMenu />
        <FilterDrawer />
        <Header />
        <Navigation />
        <Router />
        <Sider />
        <Footer />
    </AppContainer>
);

export default App;
