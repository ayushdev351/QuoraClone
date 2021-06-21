import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header.js";
import LeftSide from "./Components/LeftSide.js";
import MainBody from "./Components/Main.js";

import Spaces from "./Components/Spaces.js";
import Questions from "./Components/Question/Questions.js";
import Notifs from "./Components/Notifications.js";
import Profile from "./Components/Profile.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body>
          <LeftSide />
          <Route path="/" component={MainBody} exact />
          <Route path="/questions" component={Questions} />
          <Route path="/spaces" component={Spaces} />
          <Route path="/notifications" component={Notifs} />
          <Route path="/profile/" component={Profile} />
        </Body>
      </div>
    </Router>
  );
}

const Body = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 60px;
`;
