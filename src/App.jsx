import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import UsersContainer from './components/UsersContainer';

import './styles/global.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Header/>,
      <UsersContainer/>
      {/* <Dashboard/> */}
    </Provider>
  );
}

export default App;
