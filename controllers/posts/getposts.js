const Posts = require("../../models/Posts");

const getPosts = async (req, res = response) => {
   
    const posts = await Posts.find()

    res.status(201).json({
        ok: true,
        msg: "Posts obtenidos",
        posts
    });
    
}

module.exports = getPosts;
