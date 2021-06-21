import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <>
      <Navbar>
        <NavbarLeft>
          <span>Quora</span>
        </NavbarLeft>
        <NavbarCenter>
          <LinkContainer to="/" exact>
            <i className="fas fa-home"></i>
          </LinkContainer>
          <LinkContainer to="/questions">
            <i className="far fa-edit"></i>
          </LinkContainer>
          <LinkContainer to="/spaces">
            <i className="fas fa-users"></i>
          </LinkContainer>
          <LinkContainer to="/notifications">
            <i className="fas fa-bell"></i>
          </LinkContainer>

          <NavbarSearch class="NavbarSearch">
            <i className="fas fa-search search"></i>
            <input type="text" placeholder="Search Quora"></input>
          </NavbarSearch>
        </NavbarCenter>
        <NavbarRight className="NavbarRight">
          <LinkContainer to="/profile">
            <i className="fas fa-user"></i>
          </LinkContainer>
          <i className="fas fa-globe"></i>
          <Button className="AddQueBtn" color="secondary">
            AddQue
          </Button>
        </NavbarRight>
      </Navbar>
    </>
  );
}

export default Header;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #990099;
  color: white;
  font-size: 1.1rem;
  padding: 10px;
  position: fixed;
  width: 100vw;
  z-index: 1000;
`;

const NavbarLeft = styled.div`
  flex: 0.115;
  text-align: left;
  font-size: 1.7rem;
  font-weight: bolder;
  flex-shrink: 100;
  color: white;
`;

const NavbarCenter = styled.div`
  flex: 0.6;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
`;

const NavbarSearch = styled.div`
  > input {
    background-color: transparent;
    color: white;
    margin-left: 5px;
    border-color: white;
    border-width: 0px;
    border-bottom-width: 1px;
    padding: 0px 2px;
    outline: none;
    max-width: 11rem;
    flex-grow: 5000;
  }
`;

const NavbarRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 30px;
`;
