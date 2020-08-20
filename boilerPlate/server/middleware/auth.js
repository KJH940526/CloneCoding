const { User } = require('../models/User')


//로그인이 되어있어서 토큰을 받고 다 되었지만 isVerified false임
let auth = (req, res, next) => {
  console.log(req.cookies)
  console.log("0번 클라이언트에 있는 토큰: ",req.cookies.x_auth)
  //인증처리를 하는곳
  //client의 쿠키에저 가져온 x_auth가 사라지는건 아니다.
  //종료 할떄 생김

  // client 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;
  //app.post("/api/users/login")에서 넣은 
  // res
  //.cookie("x_auth",user.token) 와 위의 req.cookies.x_auth는 이름이 같아야한다.

  // 토큰을 복호화 한다음에 데이터 베이스에서 유저를 찾는다.
  //findeByToken은 User.js에서 만들어준 메소드
  User.findByToken(token, (err, user)=> {
    // console.log('2번 auth 클라이언트 token: ', token)
    // console.log('3번 auth DB user: ', user)
    if(err) throw err;                                        
                                                        //토큰을 생성하기 위해서 isVerified 준다 ?? login에서 isverified가 true인 사람만 로그인이 가능하게함
                                                        //근데 isverified이 false인 사람을 다른 페이지로 보내기 위해서는 auth가 필요한가?? 이건 좀 더 생각해보자.
    if(!user) return res.json({ isAuth: false, error: true, isVerified : false})
    // if(!user) return res.json({ isAuth: false, error: true})

    //유저와 토큰정보를 req에 넣어주어야 그 뒤에 사용가능
    req.token = token;
    req.user = user;
    // console.log('4번 auth DB req.token: ', req.token)
    // console.log('5번 auth DB req.user: ', req.user)

    next()//next를 하는 이유는 미들웨어에서 다음으로 가게 하기 위해서
  })
}

module.exports = { auth }
//auth안에서 인증처리를 한다.