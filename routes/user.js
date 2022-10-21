const router = require("express").Router();
router.get("/usertest", (req, res) => {
  res.send("user test successful");
  console.log("user test successful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send(username);
});

module.exports = router;