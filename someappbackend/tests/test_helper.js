const Post = require('../models/post')
const User = require('../models/user')

const initialPosts = [
    {
      content: 'HTML is easy',
      date: new Date(),
      likes: 0
    },
    {
      content: 'Browser can execute only Javascript',
      date: new Date(),
      likes: 0
    },
  ]

const nonExistingId = async () => {
  const post = new Post({ content: 'willremovethissoon', date: new Date() })
  await post.save()
  await post.remove()

  return post._id.toString()
}

const postsInDb = async () => {
  const posts = await Post.find({})
  return posts.map(p => p.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }

module.exports = {
  initialPosts, nonExistingId, postsInDb,  usersInDb
}