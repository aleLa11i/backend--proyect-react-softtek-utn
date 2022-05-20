const { response } = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_JWT_SEED } = process.env;


const validJWT = async (req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Error en carga de datos del token",
    });
  }

  try {
        const { uid, name } = jwt.verify(token, SECRET_JWT_SEED);
        console.log( uid, name );
        req.uid = uid;
        req.name = name;
  } 
  catch (error) {
        return res.status(401).json({
        ok: false,
        msg: "Token inválido.",
        });
  }

  next();
};

module.exports = validJWT;
