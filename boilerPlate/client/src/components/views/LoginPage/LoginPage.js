import React, { useState } from 'react'
//29강

import { useDispatch } from 'react-redux'

function LoginPage() {
  //redux를 사용하기 위한 dispatch
  const dispatch = useDispatch()

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

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
    //email과 password를 받는데 email이 데이터베이스에 있다면
    그에 맞는 데이터 처리가 이루어짐 
    Axios.post('/api/user/login', body)
        .then(response => {

        }) 
    */
    let body = {
      email: Email,
      Password: Password,
    };
            //loginuser는 액션
    dispatch(loginUser(body));
  };




  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center'
      ,width: '100%', height: '100vh'
    }}>
      <form style={{display:'flex', flexDirection: 'column'}}
          onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <label>PassWord</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br/>

        <button type = "submit">
          Login
        </button>
      </form>
      
    </div>
  )
}

export default LoginPage
