import React, { Component } from "react";
import VideoJS from "../videojs";
import MessengerChat from "../Messenger";
import VideoPlayer from "../ReactPlayer";

class Home extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        HOme page
     <VideoPlayer url="https://file.mentor.vn/files/lessons/output/file-1619508998180/playlist.m3u8"/>
        {/* <div className="fb-customerchat" page_id="107851557422909"></div> */}
        <MessengerChat pageId="107851557422909" htmlRef="fb-msgr" />
      </div>
    );
  }
}

export default Home;
