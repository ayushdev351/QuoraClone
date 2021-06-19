import React from "react";
import styled from "styled-components";

function LeftSide() {
  return (
    <>
      <Lside>
        <LsideHead>
          <p
            style={{
              marginBottom: "0",
              paddingTop: "2px",
              paddingBottom: "2px"
            }}
          >
            Spaces
          </p>
        </LsideHead>
        <LsideMainContent>
          <i className="fas fa-school"></i>
          <p>Studying</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-user-astronaut"></i>
          <p>Astrophysics</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-paste"></i>
          <p>Exams</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-flag"></i>
          <p>India</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-flask"></i>
          <p>Science</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-laptop"></i>
          <p>Engineering</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-book-reader"></i>
          <p>Books</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-graduation-cap"></i>
          <p>College</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-flask"></i>
          <p>Science</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-laptop"></i>
          <p>Engineering</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-book-reader"></i>
          <p>Books</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-graduation-cap"></i>
          <p>College</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-school"></i>
          <p>Studying</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-user-astronaut"></i>
          <p>Astrophysics</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-paste"></i>
          <p>Exams</p>
        </LsideMainContent>
        <LsideMainContent>
          <i className="fas fa-flag"></i>
          <p>India</p>
        </LsideMainContent>
      </Lside>
    </>
  );
}

export default LeftSide;

const Lside = styled.div`
  flex: 0.15;
  background-color: white;
  text-align: left;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const LsideHead = styled.div`
  padding-top: 2px;
  padding-left: 15%;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  opacity: 1;
  background-color: #800080;
`;

const LsideMainContent = styled.div`
  display: flex;
  padding-left: 15%;
  font-size: 14px;
  font-weight: bolder;
  opacity: 0.9;
`;
