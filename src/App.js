import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import "video.js/dist/video-js.css";
import VideoJS from "./videojs";

function App() {
  const playerOptions = {
    src: "",
    controls: true,
    autoplay: "play",
  };
  const videojsOptions = {
    fluid: true,
  };
  return (
    <div className="App">
      <h1>Test video</h1>
      <VideoJS
        src="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
        controls={true}
      />
    </div>
  );
}

export default App;
