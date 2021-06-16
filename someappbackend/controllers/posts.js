const postsRouter = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

postsRouter.get("/", async (request, response) => {
  const posts = await Post.find({}).populate("user", { username: 1, name: 1 });
  response.json(posts.map((p) => p.toJSON()));
});

postsRouter.get("/:id", async (request, response) => {
  const post = await Post.findById(request.params.id);
  if (post) {
    response.json(post.toJSON());
  } else {
    response.status(400).end();
  }
});

postsRouter.delete("/:id", async (request, response, next) => {
  const token = getTokenFrom(request);

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken) {
    return response.status(401).json({ error: "token missing or invalid " });
  }

  const post = await Post.findById(request.params.id);
  if (post.user.toString() !== decodedToken.id.toString()) {
    return response.status(401).json({ error: "permission denied " });
  }

  await Post.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

postsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;
  const post = {
    content: body.content,
    likes: body.likes,
    comments: body.comments,
  };
  const updatedPost = await Post.findByIdAndUpdate(request.params.id, post, {
    new: true,
  });
  response.json(updatedPost);
});

postsRouter.post("/", async (request, response, next) => {
  const post = request.body;
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);

  const newPost = new Post({
    content: post.content,
    date: new Date(),
    likes: 0,
    user: user._id,
  });
  const savedPost = await newPost.save();
  user.posts = user.posts.concat(savedPost._id);
  await user.save();
  response.json(savedPost.toJSON());
});

module.exports = postsRouter;
