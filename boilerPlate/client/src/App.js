import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'



function App() {
  return (
    <Router>
      <div>
        <Switch>  
                      {/*이런식으로 한 줄 처리도 가능하다*/}
          <Route exact path="/" component={LandingPage} />

                      {/*한줄로 사용할떄 꼭 /로 닫아주기*/}
          <Route exact path="/login" component={LoginPage} />
          {/*exact path랑 그냥 path의 차이점은 무엇인가?*/}

          <Route exact path="/register">
            <RegisterPage/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;

