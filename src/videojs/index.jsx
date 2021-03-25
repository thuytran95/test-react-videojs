import React, { Component } from "react";
import videojs from "video.js";
import "./style.scss";

class VideoJS extends Component {
  componentDidMount() {
    // instantiate Video.js
    let overrideNative = false;
    this.player = videojs(
      this.videoNode,
      {
        ...this.props,
        html5: {
          hls: {
            overrideNative: overrideNative,
          },
          nativeVideoTracks: !overrideNative,
          nativeAudioTracks: !overrideNative,
          nativeTextTracks: !overrideNative,
        },
      },
      function onPlayerReady() {
        console.log(this);
        // window.VIDEOJS_NO_DYNAMIC_STYLE === true;
      }
    );
  }

  shouldComponentUpdate(prevProps) {
    if (this.props.src !== prevProps.src) {
      console.log("change source");
      // this.player.dispose();
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div className="videoCourse">
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js vjs-default-skin"
            id="myVideo"
          >
            <source src={this.props.src}></source>
          </video>
        </div>
      </div>
    );
  }
}

export default VideoJS;
