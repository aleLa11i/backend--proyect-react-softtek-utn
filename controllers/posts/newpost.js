const Posts = require("../../models/Posts");

const newPost = async (req, res = response) => {
  try {
    const newPost = new Posts(req.body);
    await newPost.save();

    return res.status(201).json({
      ok: true,
      msg: "Nuevo Post Registrado.",
      ...req.body,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error de base de datos.",
    });
  }
};

module.exports = newPost;
