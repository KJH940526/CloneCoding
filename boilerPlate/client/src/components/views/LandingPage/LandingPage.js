import React, { useEffect } from 'react'
import axios from 'axios'
import { response } from 'express'

function LandingPage() {


  useEffect(()=>{
    //aixos.get은 get요청을 서버로 보낸다. 엔드포인트는 api/hello
    axios.get('/api/hello') //endpoint를 정하고
              //만들어진 엔드포인트로 요청을 서버로 보낸다.
    
    //서버에서 데이트를 받은 이후(then)
    //그리고 서버에서 돌아오는 response를 콘솔창에다가 보여준다.
    //respone = 서버에서 준 정보들 
    .then(response => console.log(response.data)) //response도 해보기
    
  },[])

  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage
