import {
  LOGIN_USER
} from '../_actions/types';


//swtich문을 사용하는 이유는? 
//type으로 분류를 한다음에 다른 접근을 하기 위해서
export default function(state = {}, action){
  //state는 들어오는 previousState이다
  console.log('types.js에서 넣음 =', action.type)
  switch(action.type){
    case LOGIN_USER:
      console.log('case가 LOGIN_USER임 =',LOGIN_USER)
      console.log('server에서 옴 =', action.payload)
      return { ...state, loginSuccess: action.payload }
      //action.payload를 loginSuccess에 넣어줌
      //redux devtools의 state를 보면 loginsuccess
      break;    
      
      default:
        return state
  }
}