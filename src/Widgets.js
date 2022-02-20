import React from "react";
import "./Widgets.css";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_search_icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetsContainer">
        <h2>What's Happening </h2>
        <TwitterTweetEmbed tweetId="933354946111705097" />
        <TwitterTimelineEmbed
          options={{
            height: 400,
          }}
          screenName="saurabhnemade"
          sourceType="profile"
        />
        <TwitterShareButton
          options={{
            buttonHashtag: undefined,
            screenName: undefined,
            text: "#reactjs is awesome",
            via: "saurabhnemade",
          }}
          url="https://facebook.com/saurabhnemade"
        />
      </div>
    </div>
  );
}

export default Widgets;
