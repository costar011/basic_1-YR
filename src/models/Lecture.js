import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Lecture = new Schema(
  {
    name: {
      type: String,
      required: true, // 필수 값
    },
    teacher: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    pay: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

// Lecture라는 녀석은 새로운 식판을 만들어줄게.
// 여기에 없는 녀석들은 조회 불가능

export default mongoose.model(`Lecture`, Lecture, `Lecture`);
// export default를 하여 외부에서도 사용 가능하게 만들어준다.
