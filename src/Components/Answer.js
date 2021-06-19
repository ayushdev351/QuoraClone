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

function Answer({ answer }) {
  return (
    <Ans className="Ans">
      <Card>
        <CardBody>
          <AnsHead>
            <CardTitle>
              <p>
                {" "}
                <i className="fas fa-user"></i> {answer.userName}
              </p>
              <CardSubtitle>
                <span style={{ fontSize: "12px" }}>{answer.userCred}</span>
              </CardSubtitle>
            </CardTitle>
          </AnsHead>
          <AnsQue>
            <p>{answer.ques}</p>
          </AnsQue>
          <AnsAns>
            <CardText>
              <p className="Answer" id="Answer">
                {answer.ans}
              </p>
            </CardText>
          </AnsAns>
        </CardBody>
      </Card>
    </Ans>
  );
}

export default Answer;

const Ans = styled.div`
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0px -5px 0px 0 #990099;
`;

const AnsHead = styled.div`
  opacity: 0.8;
`;
const AnsQue = styled.div`
  font-weight: bolder;
`;

const AnsAns = styled.div`
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
