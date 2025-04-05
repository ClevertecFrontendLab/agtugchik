import './styles/index.scss';

import { AppGrid } from '~/04-widgets';
import { Header } from '~/04-widgets';
import { Navigation } from '~/04-widgets';

import { Router } from './router';

export { AppPaths } from './router/consts/app-paths';

const App = () => (
    <AppGrid>
        <Header />
        <Navigation />
        <Router />
    </AppGrid>
);

export default App;
