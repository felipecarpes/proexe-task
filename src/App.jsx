import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import store from './store';

import './styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}

export default App;
