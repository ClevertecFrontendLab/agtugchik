import './styles/index.scss';

import { AppContainer, BurgerMenu, Footer, Header, Navigation, Sider } from '~/04-widgets';

import { Router } from './router';

export { AppPaths } from './router/consts/app-paths';

const App = () => (
    <AppContainer>
        <BurgerMenu />
        <Header />
        <Navigation />
        <Router />
        <Sider />
        <Footer />
    </AppContainer>
);

export default App;
