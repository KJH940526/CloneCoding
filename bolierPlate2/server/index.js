const express = require("express"); //express modules를 가져온다
const app = express(); //express 함수를 이용해서 새로운 express app을 만들고
const port = 5000; //포트번호

//node js require path
// const path = require("path");

//https://velog.io/@wlsdud2194/cors
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const mongoose = require("mongoose");
// https://mongoosejs.com/docs/deprecations.html //use 설정에대한 설명이 있음
//{}를 객체, []를 배열
//개발 환경에서는 mongoURI는 key.js를 통해서 dev.js에 있는 mongoURI를 가져온거
//config 객체 안에있는 mongoURI라는 속성에 접근
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("몽고DB 연결중..."))
  .catch((err) => console.log(err));

app.use(cors());

//application/x-www-form-urlencode 처럼 온 타입으로 온 데이터를 분석한다
app.use(bodyParser.urlencoded({ extended: true }));
//bodyparser 역시 express에서 제공한다.
//application/json 타입으로 온 데이터를 분석해서 가져온다.
app.use(bodyParser.json());

//쿠키에 저장하기 위해서는 express에서 제공!!!하는
//cookieparser가 필요하다
app.use(cookieParser());


//공통적인 path파라미터, 뒤에필요한 인자를 통해서 라우팅한다.
app.use("/api/users", require("./routes/users"));



//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));
//https://expressjs.com/ko/starter/static-files.html
//express에서 정적 파일 제공


// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//   // Set static folder   
//   // All the javascript and css files will be read and served from this folder
//   app.use(express.static("client/build"));

//   // index.html for all page routes    html or routing and naviagtion
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }




//포트번호 5000번에서 만들어진 app를 실행한다.
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
