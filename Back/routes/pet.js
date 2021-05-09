module.exports = (app) => {
  const mongoose = require("mongoose");
  const Pet = require("../models/pet");
  // GET all users
  app.get("/pets", async function (req, res, next) {
    await Pet.find(function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  });

  // GET user by id
  app.get("/pet/:id", async function (req, res, next) {
    var id = req.params.id;
    var myid = mongoose.Types.ObjectId(id);
    await Pet.findById(id, function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    }).exec();
  });

  // add user
  app.post("/pet/add", async function (req, res) {
    var pet = new Pet();
    pet.Name = req.body.Name;
    pet.Race = req.body.Race;
    pet.Type = req.body.Type;
    pet.Age = req.body.Age;
    pet.Avatar = req.body.Avatar;
    pet.Photos = req.body.Photos;
    try {
      var petlog = await pet.save();
      console.log(petlog);
      res.send("pet added");
    } catch (err) {
      console.log(err);
    }
  });
};
