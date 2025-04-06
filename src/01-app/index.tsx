import './styles/index.scss';

import { AppGrid, Sider } from '~/04-widgets';
import { Header } from '~/04-widgets';
import { Navigation } from '~/04-widgets';

import { Router } from './router';

export { AppPaths } from './router/consts/app-paths';

const App = () => (
    <AppGrid>
        <Header />
        <Navigation />
        <Router />
        <Sider />
    </AppGrid>
);

export default App;
