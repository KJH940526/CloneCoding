import axios from "axios"
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER
} from './types'

//dataToSubmit은 Loginpage에서 
//dispatch를 통해서 전달된 body를 받는다. 
export function loginUser(dataToSubmit){
  console.log('클라이언트 입력한: ',dataToSubmit)

  const request = axios
  //서버에다가 클라이언트에서 받아온 body를 dataToSubmit이라
  //는 인수로 받은다음에 서버로 요청을 보낸다.
  .post("/api/users/login", dataToSubmit)
  .then((response)=> response.data)
  //그러고 나서 서버에서 받은 데이터를 const request에 저장을한다.
  console.log('request: ',request)
  //30강 7분 30초
  //받을 값을 리턴을 시켜서 리듀서로 보내야한다
  //왜냐하면 리듀서에서
  //previousState와 action을 가지고 => nextState를 만들기 때문
  //이전 State와 action object를 받은 후에 next state을 retrun한다.

  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function registerUser(dataToSubmit){
  console.log('클라이언트 입력한: ',dataToSubmit)
  const request = axios
  .post("/api/users/register", dataToSubmit)
  .then((response)=> response.data)
  console.log('request: ',request)
  return {
    type: REGISTER_USER,
    payload: request
  }
}

//axios가 get이기 떄문에 body 부분은 필요가 없다.
export function auth(){

  const request = axios
  .get("/api/users/auth")
  .then((response)=> {
    console.log(response.data);
    return response.data
  })
  
  

  return {
    type: AUTH_USER,
    payload: request
  }
}