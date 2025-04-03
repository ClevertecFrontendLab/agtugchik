import './styles/index.scss';

import { AppGrid } from '~/04-widgets/app-grid';
import { Header } from '~/04-widgets/header';
import { Navigation } from '~/04-widgets/navigation';

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
