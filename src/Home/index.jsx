import React, { Component } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends Component {
  render() {
    return (
      <div>
        HOme page
        <MessengerCustomerChat
          pageId="107851557422909"
          appId="1173105399778643"
          htmlRef={window.location.pathname}
        />
      </div>
    );
  }
}

export default Home;
