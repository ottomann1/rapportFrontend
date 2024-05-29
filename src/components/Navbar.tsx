import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface NavbarProps {
  pageName: string;
  userName: string | null;
  companyName: string | null;
}

const CustomNavbar: React.FC<NavbarProps> = ({ pageName, userName, companyName }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">{pageName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className="text-light mr-3">{userName}</Nav.Item>
          <Nav.Item className="text-light">{companyName}</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
