const mongoose = require("mongoose");

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

const User = mongoose.model("User", userSchema);

module.exports = { User };
