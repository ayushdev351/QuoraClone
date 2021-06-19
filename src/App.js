import "./styles.css";
import styled from "styled-components";
import Header from "./Components/Header.js";
import LeftSide from "./Components/LeftSide.js";
import MainBody from "./Components/Main.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <LeftSide />
        <MainBody />
      </Body>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 60px;
`;

