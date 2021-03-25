import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import "video.js/dist/video-js.css";
import VideoJS from "./videojs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul style={{ display: "flex", justifyContent: "center" }}>
            <li style={{ margin: "10px" }}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <h1>Test video</h1>
      <VideoJS
        src="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
        controls={true}
      /> */}
      <MessengerCustomerChat
        pageId="107851557422909"
        appId="1173105399778643"
      />
    </div>
  );
}

export default App;
