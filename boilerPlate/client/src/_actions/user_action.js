import axios from "axios"

//dataToSubmit은 Loginpage에서 
//dispatch를 통해서 전달된 body를 받는다. 
export function loginUser(dataToSubmit){
  console.log(dataToSubmit)

  const request =axios
  //서버에다가 클라이언트에서 받아온 body를 dataToSubmit이라
  //는 인수로 받은다음에 서버로 요청을 보낸다.
  .post("/api/users/login", dataToSubmit)
  .then((respone)=> respone.data)
  //그러고 나서 서버에서 받은 데이터를 const request에 저장을한다.
  console.log(request)

  //30강 7분 30초
  return {
    type: "LOGIN_USER",
    payload: request
  }
}