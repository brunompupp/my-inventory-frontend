import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';

import Login from './Pages/Login';

const MyRoutes = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact element={<Login/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default MyRoutes;