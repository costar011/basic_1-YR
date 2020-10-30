import express from "express";
import morgan from "morgan";

const PORT = 7000;

const app = express();
app.use(morgan(`dev`));

app.listen(PORT, () => {
  console.log(`Server Start ${PORT} `);
});
