const mongoose = require("mongoose");

// 데이터베이스 Model의 정의
// 데이터의 관계, 접근과 그 흐름에 필요한 처리 과정에 관한 추상화된 모형
// 데이터 모델은 데이터 구조를 결정한다.
// Model은 Schema를 감싸주는 역할이다.

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 빈 칸을 없애 주는 역할
    unique: 1,
  },
  password: {
    type: String,
    minlength: 6,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 1이면 관리자, 0이면 일반 사용자
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    // token을 이용한 유효성 관리
    type: String,
  },
  tokenExp: {
    // token이 사용할 수 있는 기간
    type: Number,
  },
});
// 데이터베이스 Schema란
// DB 구조와 제약조건에 대한 전반적인 명세를 기술한 것이다.

const User = mongoose.model("User", userSchema);

module.exports = { User };
