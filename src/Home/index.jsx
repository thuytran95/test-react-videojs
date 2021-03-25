import React, { Component } from "react";
// import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        HOme page
        {/* <MessengerCustomerChat
          pageId="107851557422909"
          appId="1173105399778643"
          htmlRef={window.location.pathname}
        /> */}
        <div class="fb-customerchat" page_id="107851557422909"></div>
      </div>
    );
  }
}

export default Home;
