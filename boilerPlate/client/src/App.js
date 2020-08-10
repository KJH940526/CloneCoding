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

          {/* <Route exact path="/register">
            <RegisterPage/>
          </Route> */}

            {/* 위처럼 하면 props를 못 받아오는데 이유는?? */}
          <Route exact path="/register" component={RegisterPage} />
{/*component가 있어야지 컴포넌트 기능 ex)props를 받을 수 있다.*/}
        </Switch>
      </div>
    </Router>
  );
}


export default App;

