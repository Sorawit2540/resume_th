import "./App.css";
import { faUser, faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="body_text">
      <Navbar className="background-menu main-navigation" expand="md" fixed="top">
        <NavbarBrand href="/">Resume</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav className="navbar-nav mt-2 mt-md-0" navbar>
            <NavItem>
              <NavLink href="#App">
                <FontAwesomeIcon icon={faUser} />
                ข้อมูลส่วนตัว
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Education">
                <FontAwesomeIcon icon={faBook} />
                ประวัติการศึกษา
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#History">
                <FontAwesomeIcon icon={faBriefcase} />
                ประวัติการทำงาน
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
