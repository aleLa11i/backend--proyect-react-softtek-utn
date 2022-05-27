/*
Posts
host + /api/posts
*/

const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const newPost = require("../controllers/posts/newpost");
const getPosts = require("../controllers/posts/getposts");
const { validErr } = require("../middlewares/validErr");

router.post(
  "/new",
  [
    check("user", "El usuario es obligatorio").not().isEmpty(),
    check("postId", "El postId es obligatorio").not().isEmpty(),
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("mainimage", "La imagen principal es obligatorio").not().isEmpty(),
    check("images", "Las imagenes son obligatorias").not().isEmpty(),
    check("date", "La fecha es obligatoria").not().isEmpty(),
    validErr,
  ],
  newPost
);

router.get("/get", getPosts);

module.exports = router;
