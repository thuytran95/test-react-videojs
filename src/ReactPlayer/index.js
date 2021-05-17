import React, {Component} from "react"
import PropTypes from "prop-types"
import {findDOMNode} from "react-dom"
import {Icon} from "antd"
import classnames from "classnames"
import ReactPlayer from "react-player"
import screenfull from "screenfull"
import Duration from "./Duration"
import styles from "./styles.scss"
class VideoPlayer extends Component {
  state = {
    playing: true,
    fullScreen: false,
    loop: false,
    duration: 0,
    played: 0,
    loaded: 0,
    seeking: false
  }
  ref = player => {
    this.player = player
  }
  parentRef = parent => {
    this.parent = parent
  }
  playVideo = () => {
    this.setState({playing: true})
  }

  pauseVideo = () => {
    this.setState({playing: false})
  }

  togglePlay = () => {
    this.setState(prevState => ({playing: !prevState.playing}))
  }

  toggleFullScreen = () => {
    this.setState(
      prevState => ({fullScreen: !prevState.fullScreen}),
      () => {
        if (this.state.fullScreen) {
          screenfull.request(findDOMNode(this.parent))
        } else {
          screenfull.exit(findDOMNode(this.parent))
        }
      }
    )
  }
  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onDuration = duration => {
    this.setState({duration})
  }
  onSeekMouseDown = e => {
    this.setState({seeking: true})
  }
  onSeekChange = e => {
    this.setState({played: parseFloat(e.target.value)})
  }
  onSeekMouseUp = e => {
    this.setState({seeking: false})
    this.player.seekTo(parseFloat(e.target.value))
  }
  render() {
    // const { url, onClickNext, onClickPrev, onFinishWatching } = this.props;
    const {url} = this.props
    const {playing, fullScreen, played, duration} = this.state
    //console.log(played);
    return (
      <div
        ref={this.parentRef}
        className={`video-player ${fullScreen ? "full-screen" : ""}`}
      >
        <ReactPlayer
          playsinline
          muted 
          autoPlay={true}
          ref={this.ref}
          url={url}
          // onEnded={onFinishWatching}
          // onClick={this.togglePlay}
          // onPlay={this.playVideo}
          // onPause={this.onPause}
          playing={playing}
          width="100%"
          height="100%"
          // onProgress={this.onProgress}
          // onDuration={this.onDuration}
          // loop={false}
        />
        <span
          className={`iconBig ${playing ? "hidden" : ""}`}
          onClick={this.togglePlay}
        >
          <Icon type={playing ? "pause" : "caret-right"} />
        </span>
        <div className="controls">
          <span className="icon">
            <Icon type="step-backward" />
          </span>
          <span className="icon" onClick={this.togglePlay}>
            <Icon type={playing ? "pause" : "caret-right"} />
          </span>
          <span className="icon">
            <Icon type="step-forward" />
          </span>
          {/* <span>
                        <Icon type="sound" />
                    </span> */}
          <span style={{flexGrow: 1}}>
            <div className="processWrapper">
              <div className="inner">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                />
                <div className="loaded">
                  <span style={{width: `${played * 100}%`}} />
                </div>
              </div>
            </div>
          </span>
          <span style={{minWidth: "90px"}}>
            <Duration seconds={duration * played} /> /{" "}
            <Duration seconds={duration} />
          </span>
          <span className="icon" onClick={this.toggleFullScreen}>
            {/* <Icon type={fullScreen ? 'shrink' : 'arrows-alt'} /> */}
            <Icon type={fullScreen ? "shrink" : "arrows-alt"} />
          </span>
        </div>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onFinishWatching: PropTypes.func,
  onEnded: PropTypes.func,
  url: PropTypes.string
}

VideoPlayer.defaultProps = {
  style: {}
}

export default VideoPlayer
