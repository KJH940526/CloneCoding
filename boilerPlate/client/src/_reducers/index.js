import { combineReducers } from 'redux'
import user from './user_reducer';
      //user라는 이름으로 import함

//CombineReducers는 많은 Reducer들을 하나로 합쳐 하나의
//Reducer로 관리할수 있게 만들어준다. 
const rootReducer = combineReducers({
    user,
})

export default rootReducer;