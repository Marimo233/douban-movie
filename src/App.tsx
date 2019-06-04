import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import {routers} from './routes'
import NotFound from './pages/NotFound'
const App: React.FC = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Redirect to='/home' from='/' exact />
        {
          routers.map((item:any)=>{return <Route path={item.url} component={item.component} key={item.key}/>})
        }
        <Route path='/404' component={NotFound} exact/>
        <Redirect to='/404'/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
