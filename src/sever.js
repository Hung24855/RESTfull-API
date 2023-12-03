const express = require("express");
const app = express();
require("dotenv").config();
const WebRouter = require("./routes/route");
import connection from "./config/connectDB";

const configViewEngine = require("./config/configViewEngine");
const configStaticFile = require("./config/configStaticFile");
configViewEngine(app);
configStaticFile(app);

const port = process.env.PORT;

//Khai báo sử dụng router "/" là tiền tố nếu nó là "/abc" thì khi truy cập website luôn phải thêm /abc ở đầu
app.use("/", WebRouter);

app.listen(port, () => {
  console.log(`Project đang chạy với cổng : ${port}`);
});
