import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import {routers} from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Redirect to='/home' from='/' exact />
        {
          routers.map((item:any)=>{return <Route path={item.url} component={item.component} key={item.key}/>})
        }
        
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
