import express from "express"; // express framework를 사용하기 위해 import함
import morgan from "morgan"; // debugging을 위해 morgan을 import함
import mongoose from "mongoose";
import Lecture from "./models/Lecture";

// 172.30.1.23/admin

// webserver 실행 port를 70000번으로 실행하기위해 미리 상수 PORT에 7000을 저장한다.
const PORT = 7000;

// express를 app에 넣는다.
const app = express();
app.use(morgan(`dev`));

// connect(); <--- 함수
mongoose.connect(
  `mongodb://4leaf_edu:fourleaf0522@172.30.1.23:27017/admin`,
  {
    dbName: `Lecture`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("Failed To DB Connect");
    } else {
      console.log("✅ CUNNECT TO DB!");
    }
  }
);

// 사용자가 "/"을 요청하면 async await을 통하여 데이터들을 find로 찾아서 console에 뿌려준다.
app.get("/", async (req, res) => {
  console.log(" ⭕️ CALLED BY USER!");

  const result = await Lecture.find({}, {});

  console.log(result);
});

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
