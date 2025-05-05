import './styles/index.scss';

import { AppContainer, BurgerMenu, Footer, Header, Navigation, Sider } from '~/04-widgets';
import { FilterDrawer } from '~/04-widgets/filter-drawer/FilterDrawer';

import { Router } from './router';

const App = () => (
    <AppContainer>
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
