import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "react-bootstrap/esm/Button";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const renderRightNav = () => {
    if (auth.user) {
      return (
        <>

          <Badge>
            <Link to="/feed" style={{ color: "white" }}>
              Feed{" "}
            </Link>
          </Badge>
        </>
      );
    }
    return (
      <>

        <Badge>
          <Link to="/login" style={{ color: "white" }}>
            Login{" "}
          </Link>
        </Badge>
      </>
    );
  };
  const renderLeftNav = () => {
    if (auth.user) {
      return (
        <>
          <Badge onClick={auth.handleLogout}>Logout</Badge>
        </>
      );
    }
    return (
      <>
        <Badge>
          <Link to="/register" style={{ color: "white" }}>
            Register{" "}
          </Link>
        </Badge>
      </>
    );
  };
  const renderCenterNav = () => {
    return (
      <>
        <Badge>
          <Link to="/all_pets" style={{ color: "white" }}>
            All Pets {" "}
          </Link>
        </Badge>
      </>
    );
  };
  const renderCenterNav1 = () => {
    return (
      <>
        <Badge>
          <Link to="/find_pets" style={{ color: "white" }}>
            Species {" "}
          </Link>
        </Badge>
      </>
    );

    
  };
  const renderCenterNav2 = () => {
    if (auth.user) {
      return (
        <>
        <Badge>
          <Link to="/liked_pets" style={{ color: "white" }}>
            Liked Pets {" "}
          </Link>
        </Badge>
        </>
      );
    }
    return (
      <>
      </>
    );
  }
  const renderCenterNav3 = () => {
    return (
      <>
        <Badge>
          <Link to="/adopted_pets" style={{ color: "white" }}>
            Adopted Pets {" "}
          </Link>
        </Badge>
      </>
    );

    
  };
  const renderCenterNav4 = () => {
    return (
      <>
        <Badge>
          <Link to="/about" style={{ color: "white" }}>
            About {" "}
          </Link>
        </Badge>
      </>
    );

    
  };
  return (
    <div>
      <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Starter App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />

          <NavDropdown
            id="nav-dropdown-dark-example"
            align={{ sm: "end" }}
            title="Menu"
            menuVariant="dark"
          >
            <NavDropdown.Item style={{ color: "white" }} href="/">
              <Badge>Home</Badge>
            </NavDropdown.Item>

            <NavDropdown.Item>{renderRightNav()}</NavDropdown.Item>
            <NavDropdown.Item>{renderLeftNav()}</NavDropdown.Item>
            <NavDropdown.Item>{renderCenterNav()}</NavDropdown.Item>
            <NavDropdown.Item>{renderCenterNav1()}</NavDropdown.Item>
            <NavDropdown.Item>{renderCenterNav2()}</NavDropdown.Item>
            <NavDropdown.Item>{renderCenterNav3()}</NavDropdown.Item>
            <NavDropdown.Item>{renderCenterNav4()}</NavDropdown.Item>






          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
