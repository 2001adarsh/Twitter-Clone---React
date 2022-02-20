import { Avatar, Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Akash Singhal",
      userName: "akashsinghal",
      verfied: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar
            sx={{ bgcolor: orange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening? "
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox-inputImage"
          placeholder="Optional: Enter Image URL "
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox-tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
