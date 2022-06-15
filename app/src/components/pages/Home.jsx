import React from "react";
import Textbox from "../atoms/textbox/TextBox";
import PageTransitionButton from "../atoms/button/PageTransitionButton";
import "../pages/style/homeStyle.css";

const Home = (props) => (
  <div class="l-main">
    <h1 class="l-main_title">home</h1>
    <div class="l-main__button">
      <PageTransitionButton />
    </div>

    {/* <p>{`history: ${JSON.stringify(props.history, null, "\t")}`}</p>
    <p>{`location: ${JSON.stringify(props.location, null, "\t")}`}</p>
    <p>{`match: ${JSON.stringify(props.match, null, "\t")}`}</p> */}
  </div>
);

export default Home;
