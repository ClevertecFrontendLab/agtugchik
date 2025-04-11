import './styles/index.scss';

import { AppContainer, Sider } from '~/04-widgets';
import { Header } from '~/04-widgets';
import { Navigation } from '~/04-widgets';
import { Footer } from '~/04-widgets/footer/Footer';

import { Router } from './router';

export { AppPaths } from './router/consts/app-paths';

const App = () => (
    <AppContainer>
        <Header />
        <Navigation />
        <Router />
        <Sider />
        <Footer />
    </AppContainer>
);

export default App;
