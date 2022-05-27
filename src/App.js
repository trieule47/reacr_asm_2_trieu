import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { routes } from './contants/routes';
import TodoList from './containers/TodoList';
import LoginView from './containers/LoginView';
import PrivateRoute from './conponents/privateRoute';
import AuthRoute from './conponents/authRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <PrivateRoute path={routes.Home} component={<TodoList/>} />
        <AuthRoute path={routes.Home} component={<AuthRoute/>} />
      </Routes>
    </div>
  );
}

function A(){
  return(
    <>
    <Route path={routes.Home} element={<TodoList/>} />
    </>
  )
}

export default App;