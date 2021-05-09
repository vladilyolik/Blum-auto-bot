module.exports = (app) => {
  const mongoose = require("mongoose");
  const User = require("../models/user");
  // GET all users
  app.get("/users", async function (req, res, next) {
    await User.find(function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  });

  // GET user by id
  app.get("/user/:id", async function (req, res, next) {
    var id = req.params.id;
    var myid = mongoose.Types.ObjectId(id);
    await User.findById(id, function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    }).exec();
  });

  // add user
  app.post("/user/add", async function (req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.FullName = req.body.FullName;
    user.Age = req.body.Age;
    user.Ville = req.body.Ville;
    user.photo = req.body.photo;
    try {
      var userlog = await user.save();
      console.log(userlog);
      res.send("user added");
    } catch (err) {
      console.log(err);
    }
  });
};
