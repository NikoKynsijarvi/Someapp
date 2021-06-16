import React, { useState } from "react";
import { FaArrowUp, FaBars, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

function DropdownMenu({ setUser }) {
  const handleLogOut = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("loggedSomeappUser");
    setUser(null);
  };

  function DropdownItem(props) {
    return (
      <p onClick={props.handleClick} className="menuitem">
        <span className="dropdownIcon">{props.leftIcon}</span>
        {props.children}
        <span className="dropdownIcon">{props.rightIcon}</span>
      </p>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem
        handleClick={handleLogOut}
        leftIcon={<FiLogOut />}
        rightIcon={<BiRightArrow />}
      >
        Log out
      </DropdownItem>
      <Link to={"/user"}>
        <DropdownItem leftIcon={<FaUserCircle />} rightIcon={<BiRightArrow />}>
          User
        </DropdownItem>
      </Link>
    </div>
  );
}

function NavItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const user = props.setUser;
  return (
    <li className="navitem">
      <p className="iconbutton" onClick={() => setIsOpen(!isOpen)}>
        {props.icon}
      </p>
      {isOpen ? <DropdownMenu setUser={user} /> : <div></div>}
    </li>
  );
}

function NavToTop(props) {
  return (
    <li className="navitem">
      <p className="iconbutton" onClick={props.event}>
        {props.icon}
      </p>
    </li>
  );
}

function Navbar(props) {
  return (
    <nav className="nav">
      <ul className="navnav">{props.children}</ul>
    </nav>
  );
}

function Navigation({ setUser }) {
  const toUp = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar>
      <NavItem setUser={setUser} icon={<FaBars />} />
      <NavToTop icon={<FaArrowUp />} event={toUp} />
    </Navbar>
  );
}

export default Navigation;
