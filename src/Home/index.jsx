import React, { Component } from 'react'
import VideoJS from '../videojs'
import MessengerChat from '../Messenger'
import VideoPlayer from '../ReactPlayer'

class Home extends Component {
  constructor () {
    super();
    this.state = {
      isIOSDevice: false
    }
  }

  componentDidMount () {
    var isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (isIOS) {
      console.log('This is a IOS device')
     this.setState({isIOSDevice: true})
    } else {
      console.log('This is Not a IOS device')
    }
  }

  render () {
    return (
      <div>
        HOme page
        <VideoPlayer url='https://file.mentor.vn/files/lessons/file-1565945918422.mp4' isIOSDevice={this.state.isIOSDevice}/>
        {/* <div className="fb-customerchat" page_id="107851557422909"></div> */}
        <MessengerChat pageId='107851557422909' htmlRef='fb-msgr' />
      </div>
    )
  }
}

export default Home
