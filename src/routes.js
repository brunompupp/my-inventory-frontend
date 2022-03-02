import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

const MyRoutes = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact element={<Login/>} />
        <Route path='/painel' exact element={<Dashboard/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default MyRoutes;