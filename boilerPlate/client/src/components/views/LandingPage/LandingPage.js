import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter} from 'react-router-dom'

function LandingPage(props) {


  useEffect(()=>{
    //aixos.get은 get요청을 서버로 보낸다. 엔드포인트는 api/hello
    axios.get('/api/hello') //endpoint를 정하고
              //만들어진 엔드포인트로 요청을 서버로 보낸다.
    
    //서버에서 데이트를 받은 이후(then)
    //그리고 서버에서 돌아오는 response를 콘솔창에다가 보여준다.
    //respone = 서버에서 준 정보들/
    .then(response => console.log(response)) //response도 해보기
  },[])

  const onClickHandler = () => {
    axios.get('api/users/logout')
      .then(response =>{
        console.log('response.data : ',response.data)  //server에서 success: ture가 넘어온다 json으로 보낸
        //로그인 상태가 아니면 server에서 success가 아니고 isauth, error를 보냄 
        if(response.data.success){
          alert("로그아웃에 성공했습니다.")
          props.history.push("/login")   
        } else {
          alert("로그아웃 하는데 실패 했습니다.")
        }
      }) 
  }

  const onLogin = () => {
    props.history.push("/login")
}

  
const onRegister = () => {
  props.history.push("/register")
}

const onMyPage = () => {
  props.history.push("/mypage")
}

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center'
      ,width: '100%', height: '100vh'
    }}>
      <span>
      <h2>LandingPage</h2>
      <button onClick={onRegister}>회원가입</button> <br/>
      <button onClick={onLogin}>로그인</button>   <br/>
      <button onClick={onClickHandler}> 로그아웃 </button> <br/>
      <button onClick={onMyPage}> 회원수정 </button>
      </span>
    </div>
  )
}

export default withRouter(LandingPage)
