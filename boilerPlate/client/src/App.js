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

//- 추가한거
import MyPage from './components/views/MyPage/MyPage';


import Auth from './hoc/auth'


function App() {
  return (
    <Router>
      <div>
        <Switch>  
                      

{/*Auth.js에서 auth에 관한것을 설정하고 받아온 함수이고 그리고 그 함수는
  첫번쨰 인자로 컴포넌트를 받고, 
  두번쨰 인자로는 옵션을 받는다.
  옵션은 null이면 누구나 들어갈 수 있는 페이지, 
  false면 로그인한 유저는 출입 불가능한 페이지,
  true면 로그인한 유저만 출입이 가능한 페이지이다
  마지막 인자로는 어드민 유저만 들어가길 원할떄 인데 auth에서 기본값을
  null로 주었다 따라서 여기서 ,true라고 주기만 하면된다. */}
          <Route exact path="/" component={Auth(LandingPage, null)} />


                      {/*이런식으로 한 줄 처리도 가능하다*/}
                      {/*한줄로 사용할떄 꼭 /로 닫아주기*/}
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          {/*exact path랑 그냥 path의 차이점은 무엇인가?*/}

          {/* <Route exact path="/register">
            <RegisterPage/>
          </Route> */}

            {/* 위처럼 하면 props를 못 받아오는데 이유는?? */}
          <Route exact path="/register" component={Auth(RegisterPage,false)} />
          {/*component가 있어야지 컴포넌트 기능 ex)props를 받을 수 있다.*/}
        

          <Route exact path="/mypage" component={Auth(MyPage,true)} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

