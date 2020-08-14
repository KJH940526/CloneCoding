import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

//컴포넌트간의 라우팅을 하기 위해서 
import { withRouter} from 'react-router-dom'


function LoginPage(props) {
  //redux를 사용하기 위한 dispatch
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    // console.log(event)
    // console.log(event.currentTarget)
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    // console.log(event)
    // console.log(event.currentTarget)
    setPassword(event.currentTarget.value);
  }



  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Email", Email);
    console.log("Password", Password);

    /*
    //30강
    원래 여기에 axios를 사용하여 쉽게 할 수 있다
    let body = {
        email: Email,
        Password: Password
    }
    이런식으로            //body는 위에서 만듬
    이런식으로            //body는 위에서 만듬
    //email과 password를 받는데 email이 데이터베이스에 있다면
    그에 맞는 데이터 처리가 이루어짐  //body는 전하는 데이터
    Axios.post('/api/user/login', body)
        .then(response => {

        }) 
    */
   let body = {
    email: Email,
    password: Password,
  }; 
    
            //loginuser는 액션 //user_action에 있는 loginUser에 body
    dispatch(loginUser(body))
      .then(response =>{
        console.log('client 리스폰 ',response)
        console.log('clinet props' , props)
        if(response.payload.loginSuccess){
          alert("로그인에 성공하였습니다.")
          props.history.push('/') //리액트에서 페이지를 옮길때는 이런방식으로 간다.
        } else {                    //props는 line 7에서 받은 props이다
          alert('Error')
        }
      })
  };




  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="Password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default withRouter(LoginPage)


