import React, { useState, useEffect } from "react";
import postService from "./../services/julkaisut";
import "./../index.css";
import { FaHeart } from "react-icons/fa";
import Notification from "./Notification";

const Julkaisu = ({ posts, likePost, user, removeJulkaisu }) => {
  return (
    <div className="julkaisu">
      <div className="content">
        <h1 className="user">{posts.user.username}</h1>
        <div className="contenttext">
          <p>{posts.content} </p>
        </div>
        <div className="buttons">
          <FaHeart className="likeButton" onClick={likePost} />
          {posts.likes} likes
          <button className="viewButton">View</button>
          {user.username === posts.user.username ? (
            <button className="viewButton" onClick={removeJulkaisu}>
              Delete
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

const AllJulkaisut = ({ posts, likePost, removeJulkaisu, user }) => {
  return (
    <div className="julkaisut">
      {posts.map((a) => (
        <Julkaisu
          likePost={() => likePost(a.id)}
          removeJulkaisu={() => removeJulkaisu(a.id)}
          key={a.id}
          posts={a}
          user={user}
        ></Julkaisu>
      ))}
    </div>
  );
};

const JulkaisuForm = ({ content, handleChange, addJulkaisu, user }) => {
  return (
    <div className="formContainer">
      <h1 className="formHeader">Hi, {user.username} !</h1>
      <form className="formJulkaisu">
        <textarea
          maxLength="200"
          rows="5"
          cols="30"
          className="inputForm"
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="Write text here"
        ></textarea>
        <div>
          <button className="julkaisuButton" onClick={addJulkaisu}>
            Lisaa
          </button>
        </div>
      </form>
    </div>
  );
};

function MainSection({ user, message, setMessage, className, setClassName }) {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      setPosts(initialPosts);
    });
  }, []);

  const likePost = (id) => {
    const post = posts.find((n) => n.id === id);
    console.log(post);
    const likes = post.likes + 1;
    console.log(likes);
    const likedPost = {
      content: post.content,
      date: new Date().toISOString(),
      likes: likes,
    };

    postService.update(id, likedPost).then((updatedPost) => {
      postService.getAll().then((updatedPost) => {
        setPosts(updatedPost);
      });
    });
  };

  const addJulkaisu = (event) => {
    event.preventDefault();
    const julkaisuObject = {
      content: content,
      date: new Date().toISOString(),
      likes: 0,
    };

    postService.create(julkaisuObject).then((newPosts) => {
      setPosts(posts.concat(newPosts));
      postService.getAll().then((allPosts) => {
        setPosts(allPosts);
      });
      setContent("");
      setClassName("success");
      setMessage("Post added !");
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    });
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const removeJulkaisu = (id) => {
    postService.remove(id).then((newPosts) => {
      postService.getAll().then((newPosts) => {
        setPosts(newPosts);
      });
    });
  };

  return (
    <div className="main">
      <Notification className={className} message={message} />
      <JulkaisuForm
        content={content}
        handleChange={handleChange}
        addJulkaisu={addJulkaisu}
        user={user}
      />
      <AllJulkaisut
        posts={posts}
        likePost={likePost}
        removeJulkaisu={removeJulkaisu}
        user={user}
      />
    </div>
  );
}

export default MainSection;
