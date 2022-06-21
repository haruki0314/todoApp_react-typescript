import React from "react";
import Textbox from "../atoms/textbox/TextBox";
import PageTransitionButton from "../atoms/button/PageTransitionButton";
import "../pages/style/HomeStyle.css";


const Home = () => (
  <div className="l-main">
    <h1 className="l-main_title">home</h1>
    <div className="l-main__button">
      <PageTransitionButton />
    </div>
    {/* <p>{`history: ${JSON.stringify(props.history, null, "\t")}`}</p>
    <p>{`location: ${JSON.stringify(props.location, null, "\t")}`}</p>
    <p>{`match: ${JSON.stringify(props.match, null, "\t")}`}</p> */}
  </div>
);

export default Home;
