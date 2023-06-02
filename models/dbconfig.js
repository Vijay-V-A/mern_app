const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/nursery_shop")
  .then(() => console.log(`Database Connected...`))
  .catch((err) => console.log(err));
