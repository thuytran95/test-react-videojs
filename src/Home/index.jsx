import React, { Component } from "react";

class Home extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        HOme page
        <div class="fb-customerchat" page_id="107851557422909"></div>
      </div>
    );
  }
}

export default Home;
