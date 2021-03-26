import React, { Component } from "react";
import videojs from "video.js";
import "./style.scss";

class VideoJS extends Component {
  componentDidMount() {
    // instantiate Video.js
    let overrideNative = false;
    this.player = videojs(
      this.videoNode,
      // {
      //   ...this.props,
      //   options: {
      //     html5: {
      //       hls: {
      //         overrideNative: false,
      //       },
      //       nativeVideoTracks: true,
      //       nativeAudioTracks: true,
      //       nativeTextTracks: true,
      //     },
      //   },
      // },
      this.props,
      function onPlayerReady() {
        // window.VIDEOJS_NO_DYNAMIC_STYLE === true;

        (function (window, videojs) {
          var player = (window.player = videojs("myVideo"));

          // // hook up the video switcher
          // var loadUrl = document.getElementById("load-url");
          // var url = document.getElementById("url");
          // loadUrl.addEventListener("submit", function (event) {
          //   event.preventDefault();
          //   player.src({
          //     src: url.value,
          //     type: "application/x-mpegURL",
          //   });
          //   return false;
          // });
          // hook up the video switcher
          // var loadUrl = document.getElementById("load-url");
          // var url = document.getElementById("url");
          // loadUrl.addEventListener("submit", function (event) {
          //   event.preventDefault();

          //   return false;
          // });
          // player.src({
          //   src: url.value,
          //   type: "application/x-mpegURL",
          // });
        })(window, window.videojs);
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
            <source src={this.props.src} type="application/x-mpegURL"></source>
          </video>
        </div>
      </div>
    );
  }
}

export default VideoJS;
