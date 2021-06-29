// 라우팅은 어플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말한다.

const express = require("express"); // node_modules 폴더에 있는 미리 구현한 라우팅 모듈을 가져온다.
const app = express(); // 새로운 라우터 객체를 만든다. 이 라우터의 객체 이름을 app으로 설정한다.
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://benfsong11:abcd1234@boilerplate.6vsj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
// 첫 번째 파라미터인 "/"는 요청이 수행되는 주소이다.
// 두 번째 파라미터인 (req, res) => {}는 콜백함수이다.
// 콜백함수란 다른 함수의 인자로서 활용되는 함수이며, 어떤 이벤트에 의해서 호출된다.
// 여기서 req는 요청객체이고, res는 응답객체이다.
// res.send는 클라이언트에 문자열로 응답하기 위한 함수이다.
// 여기서 res.send("Hello World")라고 했기 때문에 화면에 Hello World가 출력된다.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
// app.listen()은 포트에서 연결을 청취하기 위해 필요한 것이다.
// 즉 "5000번 포트에서 연결을 들어라"이다.
