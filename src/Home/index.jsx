import React, { Component } from "react";
import VideoJS from "../videojs";

class Home extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        HOme page
        <VideoJS
          src="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
          controls={true}
        />
        <div className="fb-customerchat" page_id="107851557422909"></div>
      </div>
    );
  }
}

export default Home;
