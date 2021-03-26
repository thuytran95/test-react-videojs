import React, { Component } from "react";
import MessengerChat from "../Messenger";

class About extends Component {
  // componentDidMount() {
  //   window.fbAsyncInit = function () {
  //     window.FB.init({
  //       appId: "",
  //       autoLogAppEvents: true,
  //       xfbml: true,
  //       version: "v3.0",
  //     });
  //   };
  //   (function (d, s, id) {
  //     const fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     const js = d.createElement(s);
  //     js.id = id;
  //     js.src =
  //       "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=1709228422490559&autoLogAppEvents=1";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  //   window._sbzq ||
  //     (function (e) {
  //       e._sbzq = [];
  //       const t = e._sbzq;
  //       t.push(["_setAccount", 60187]);
  //       const n = e.location.protocol === "https:" ? "https:" : "http:";
  //       const r = document.createElement("script");
  //       r.type = "text/javascript";
  //       r.async = true;
  //       r.src = n + "//static.subiz.com/public/js/loader.js";
  //       const i = document.getElementsByTagName("script")[0];
  //       i.parentNode.insertBefore(r, i);
  //     })(window);
  // }
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        About page
        {/* <div className="fb-customerchat" page_id="107851557422909"></div> */}
        <MessengerChat pageId="107851557422909" ref="fb-msgr" />
      </div>
    );
  }
}

export default About;
