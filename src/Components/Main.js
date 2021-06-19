import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import Answer from "../Components/Answer.js";
import answersData from "../answersData.js";

function MainBody() {
  return (
    <Main>
      <MainHead>
        <Card>
          <CardBody>
            <CardTitle>
              <p className="Username">
                <i class="fas fa-user"></i> User-Name
              </p>
            </CardTitle>
            <CardText>
              <input
                type="text"
                placeholder="Add your Question or Link here"
                className="Addque"
              ></input>
            </CardText>
          </CardBody>
        </Card>
      </MainHead>
      {answersData.map((answerData) => (
        <Answer key={answerData._id} answer={answerData} />
      ))}
    </Main>
  );
}

export default MainBody;

const Main = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 90vh;
  padding: 15px;
  text-align: left;
  overflow-y: scroll;
`;

const MainHead = styled.div``;
