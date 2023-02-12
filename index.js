const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

const userRoute = require("./routes/User");
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
