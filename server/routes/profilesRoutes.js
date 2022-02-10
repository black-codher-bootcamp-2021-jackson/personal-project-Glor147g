const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");

const profileRoutes = (app) => {//
  app.get(`/api/profile`, async (req, res) => {//
    const profiles = await Profile.find();//using the defined schema, look and find the prof/database

    return res.status(200).send(profiles); //return it back to the databse
  });

  app.post(`/api/profile`, async (req, res) => { //asyn: cant return a thing before we get a response ; insert a new person
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {//update sone in data base and pass in id etc
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {//delete someone from the data base
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
