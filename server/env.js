const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
   res.send("Hello");
   next();
});

router.get("/:env", (req, res, next) => {
   const { env } = req.params;
   if (env === "port") {
      res.send(process.env.PORT);
   } else if (env === "name") {
      res.send(process.env.db_name);
   } else if (env === "pass") {
      res.send(process.env.db_pass);
   } else if (env === "db") {
      res.send(process.env.db);
   } else {
      res.send("Invalid!");
   }

   next();
});

module.exports = router;