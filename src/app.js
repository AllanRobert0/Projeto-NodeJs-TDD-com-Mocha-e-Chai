const express = require("express");

// class AppController {
//   constructor() {
//     this.express = express();

//     this.middlewares();
//     this.routes();
//   }

//   middlewares() {
//     this.express.use(express.json());
//   }

//   routes() {
//     this.express.use(require("./routes/routes"));
//   }
// }

// module.exports = new AppController().express;

const app = express();

app.use(express.json());

app.use(require("./routes/routes"));

app.use("/", (req , res) => {
  res.send("rota '/' ")
})

app.listen(process.env.PORT || 3000, () => {
  console.log("\n\n##Server Running.##\n\n");
});

module.exports = app;

