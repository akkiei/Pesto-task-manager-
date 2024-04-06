const express = require("express");
const db = require("../db/mongoose");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

(async () => {
  await db.connect();
})();

const app = express();
app.use(
  cors({
    origin: "*", // Allow only requests from example.com
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
