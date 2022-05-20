const { response } = require("express");
const { generateJWT } = require("../../helpers/json-web-token");
const Users = require("../../models/Users");

const renewToken = async (req, res = response) => {

    const {uid,name} = req;
    const token = await generateJWT(uid, name);
    const { email, image} = await Users.findOne({ "_id": uid });

    res.status(201).json({
      ok: true,
      msg: "Token renovado.",
      uid,
      name,
      email,
      image,
      token,
    });
  };

  module.exports = renewToken;