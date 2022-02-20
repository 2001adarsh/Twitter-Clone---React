import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
    console.log(posts);
    // db.collection("post")
    //   .get()
    //   .then((querySnapshot) => {
    //     const document = querySnapshot.docs.map((doc) => doc.data);
    //     console.log(document);
    //   });
  }, []);

  return (
    <div className="feed">
      <div className="feed-home">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
      {/* <Post
        displayName="Adarsh Singh"
        userName="2001adarsh"
        verified={true}
        text="I challenge you to keep learning."
        avatar=""
        image="https://media1.giphy.com/media/I5xVnGJRHZZf2/giphy.gif?cid=790b76116955996099f8c438b5e54420437524e5d34d7ad4&rid=giphy.gif&ct=g"
      /> */}
    </div>
  );
}

export default Feed;
