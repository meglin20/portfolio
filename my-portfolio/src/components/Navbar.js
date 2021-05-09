import React, {Component, useState  } from "react"; 
import '../Assets/navigation.css';
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
  NavbarText
} from 'reactstrap';


// class Navbar extends Component {
//   render(){
//     return(
//       // <div id="top_row">
//       //   <header class= "website-title">
//       //     {/* <img id="logp" src="images/logop.png"></img> */}
//       //     <h1>Megan Lin</h1>
//       //   </header>
//       //   <nav>
//       //     <Link to="/home"><a href="">Home</a></Link>
//       //     <Link to="/work"><a href="">Work</a></Link>
//       //     <Link to="/about"><a href="about.html">About</a></Link>
//       //   </nav>
//       // </div>
      
const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" light>
        <NavbarBrand href="/" id="header">Megan Lin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem >
              <NavLink className="nav-menu" href="/home">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="nav-menu">
                Work
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink className="nav-menu" href="/nacro">NACRO</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className="nav-menu" href="/zuz">ZUZ</NavLink>
                  </NavItem>
                </DropdownItem> 
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="nav-menu" href="/about">About</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
      
    );
  }
// }

export default Navigation;