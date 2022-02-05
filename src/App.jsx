import { Provider } from 'react-redux';
import RoutesApp from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import './styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <RoutesApp />
      </Router>
    </Provider>
  );
}

export default App;
