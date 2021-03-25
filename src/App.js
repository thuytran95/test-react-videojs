import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import "video.js/dist/video-js.css";

function App() {
  const playerOptions = {
    src:
      "https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8",
    controls: true,
    autoplay: "play",
  };
  const videojsOptions = {
    fluid: true,
  };
  return (
    <div className="App">
      <h1>Test video</h1>
      <VREPlayer
        playerOptions={playerOptions}
        videojsOptions={videojsOptions}
        onReady={(player) => console.log(player)}
        onPlay={(e, _, second) => console.log("Play!")}
        onPause={(e, _, second) => console.log("Pause!")}
        onEnded={(e, _) => console.log("Ended!")}
      />
    </div>
  );
}

export default App;
