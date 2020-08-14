import React,{useEffect} from 'react'
// import Axios from 'axios'
import {useDispatch} from 'react-redux'
import { auth } from '../_actions/user_action'


export default function(SpecificComponent, option, adminRoute = null){

  //SpecificComponent = LandingPage같은 페이지를 검사하는 component
  
  //option = null , true , false 있는데
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false = > 로그인한 유저는 출입 불가능한 페이지


  function AuthenticationCheck(props) {
    // console.log(props)
    //서버에서 데이트를 요청해서 유저의 상태를 받아와서
    //그 유저가 현재 로그인중인지? 아니면 관리자인지 확인한다.

    const dispatch = useDispatch();

    useEffect(() => {

                //리덕스 auth는 액션의 이름
              //server에 가져온 데이더가 모두 response에 들어있다
    dispatch(auth()).then((response) => {
        console.log('Auth ',response)
        console.log('Auth option',option)
        console.log('Auth adminRoute',adminRoute)

        //로그인, 비로그인, 어드민인가 아닌가를 분기처리한다.
        
        //로그인하지 않은 상태 = isAuth가 false인 상태
        if(!response.payload.isAuth){
            //옵션이 트루인 페이지를 들어갈라고 하면 
          if(option) {
            console.log('Auth option',option)
            console.log('Auth adminRoute',adminRoute)
            console.log('response.payload.isAdmin',response.payload.isAdmin)
              props.history.push('/login')
            }
        } else {



 //로그인 한 상태 관리자가 아닌데 관리자 페이지를 들어갈라고 할떄
 //관리자는 따로 설정 안해줘도 되는 이유는 isAdmin이 true이기 떄문에 안해도됨

          //&& 두 연산자가 모두 참일 경우에만 true이다
          //adminRout = 어드민페이지가 맞지만
          //isAdmin이 false인 경우는 관리자 페이지를 못가게 막아준다.
          if (adminRoute && !response.payload.isAdmin){
            
            console.log('Auth option',option)
            console.log('Auth adminRoute',adminRoute)
            console.log('response.payload.isAdmin',response.payload.isAdmin)
            props.history.push('/')


            
          } else {



            //로그인한 유저는 출입 불가능한 페이지 갈 떄
            if(option === false){
              console.log('Auth option',option)
              console.log('Auth adminRoute',adminRoute)
              console.log('response.payload.isAdmin',response.payload.isAdmin)
              props.history.push('/')
            }
          }
        }
      })  
        //하면 일단 atuh로 가서 그 유저가 로그인 한 유저인지 아닌지
        //쿠키를 이용해서 확인하고  
    }, [])

    
    return ( //검사하는 컴포넌트
    <SpecificComponent/>
    )
  }

  return AuthenticationCheck
}