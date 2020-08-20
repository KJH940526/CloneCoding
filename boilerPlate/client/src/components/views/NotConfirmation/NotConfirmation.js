import React from "react";
import axios from "axios"
import { withRouter} from 'react-router-dom'

function NotConfirmation(props) {

  const onLandingPage = () => {
    props.history.push("/")
}


const onClickHandler = () => {
  axios.get('api/users/logout')
    .then(response =>{
      console.log('response.data : ',response.data)  //server에서 success: ture가 넘어온다 json으로 보낸
      //로그인 상태가 아니면 server에서 success가 아니고 isauth, error를 보냄 
      if(response.data.success){
        alert("로그아웃에 성공했습니다.")
        props.history.push("/")   
      } else {
        alert("로그아웃 하는데 실패 했습니다.")
      }
    }) 
}

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center'
      ,width: '100%', height: '100vh'
    }}> 
        <p>이메일 인증을 받지 않았습니다.</p>
        <p><button onClick={onLandingPage}>LandingPage</button></p>
        <p><button onClick={onClickHandler}>로그아웃</button></p>
    </div>
  )
}

export default withRouter(NotConfirmation)