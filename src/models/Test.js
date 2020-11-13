import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Test = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    regeon: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

// Test라는 녀석은 새로운 식판을 만들어줄게.
// 여기에 없는 녀석들은 조회 불가능

export default mongoose.model(`Test`, Test, `Test`);
// export default를 하여 외부에서도 사용 가능하게 만들어준다.
