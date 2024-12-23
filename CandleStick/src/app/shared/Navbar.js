import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { InputMenuIcon } from "../../reducers/InputSlice";
import { FaBars } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Switch } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { Username } = useSelector((state) => state.InputValue);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPriceTesting, setShowPriceTesting] = useState(
    location.pathname === "/percent"
  );

  const handleSCToggle = () => {
    setShowPriceTesting((prevState) => !prevState);
    if (showPriceTesting) {
      history.push("/strategy_simulator");
    } else {
      history.push("/percent");
    }
  };
  const handleLogoutAndCloseMenu = () => {
    localStorage.clear();
    window.location = "/login";
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(InputMenuIcon(true));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const styles = {
    navbar: {
      backgroundColor: "#251e34",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
      color: "white",
      left: 0,
    },
    navbarInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
    },
    navbarLogo: {
      width: "18rem",
      height: "3rem",
    },
    navbarLinks: {
      display: isMobile ? "none" : "flex",
      gap: "1rem",
    },
    navbarLink: {
      color: "white",
      fontSize: "0.875rem",
      padding: "0.5rem 1rem",
      backgroundColor: "#38a169",
      borderRadius: "0.5rem",
      textDecoration: "none",
    },
    priceLink: {
      color: "white",
      fontSize: "0.875rem",
      padding: "0.5rem 1rem",
      backgroundColor: "rgb(5 151 156)",
      borderRadius: "0.5rem",
      textDecoration: "none",
    },
    percentileLink: {
      color: "white",
      fontSize: "0.875rem",
      padding: "0.5rem 1rem",
      backgroundColor: "rgb(15 99 54)",
      borderRadius: "0.5rem",
      textDecoration: "none",
    },
    navbarLinkHover: {
      backgroundColor: "#2f855a",
      transition: "background-color 0.3s",
    },
    navbarProfile: {
      display: "flex",
      alignItems: "center",
    },
    navbarProfileToggle: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      border: "none",
      padding: 0,
      color: "#fff",
      cursor: "pointer",
    },
    navbarProfileIcon: {
      width: "3rem",
      height: "3rem",
      backgroundColor: "white",
      color: "#4a5568",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      marginRight: "0.5rem",
    },
    navbarDropdownMenu: {
      backgroundColor: "#2d3748",
      color: "white",
    },
    navbarDropdownItem: {
      color: "white",
      textDecoration: "none",
    },
    navbarDropdownItemHover: {
      backgroundColor: "#4a5568",
    },
    mobileMenu: {
      display: isOpen && isMobile ? "flex" : "none",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#251e34",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      zIndex: 1000,
      borderRadius: "0.5rem",
    },
    mobileMenuLink: {
      color: "white",
      fontSize: "1rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "#38a169",
      borderRadius: "0.5rem",
      textDecoration: "none",
      width: "100%",
      textAlign: "center",
      transition: "background-color 0.3s, color 0.3s",
    },
    mobilePriceLink: {
      color: "white",
      fontSize: "1rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "rgb(5 151 156)",
      borderRadius: "0.5rem",
      textDecoration: "none",
      width: "100%",
      textAlign: "center",
      transition: "background-color 0.3s, color 0.3s",
    },
    mobilePercentileLink: {
      color: "white",
      fontSize: "1rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "rgb(15 99 54)",
      borderRadius: "0.5rem",
      textDecoration: "none",
      width: "100%",
      textAlign: "center",
      transition: "background-color 0.3s, color 0.3s",
    },
    mobileMenuLinkHover: {
      backgroundColor: "#2f855a",
      color: "#e2e8f0",
    },
    navbarToggle: {
      display: isMobile ? "block" : "none",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      padding: "0.5rem",
    },
    bar: {
      display: "block",
      width: "1.5rem",
      height: "0.2rem",
      backgroundColor: "white",
      margin: "0.2rem 0",
      transition: "background-color 0.3s",
    },
    navbarToggleHover: {
      backgroundColor: "#a0aec0",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarInner}>
        <Link to="/">
        <img
          src={require("../../assets/logo.png")}
          alt="Icon"
          style={styles.navbarLogo}
        />
        </Link>
        <div className="ml-5" style={styles.navbarLinks}>

          <Link to="/report" style={styles.navbarLink}>
            Summary Report
          </Link>
        </div>
        <div className="d-flex align-items-center ">
        <div className="d-none d-md-block mr-3">
          Price Testing
          <Switch checked={showPriceTesting} onChange={handleSCToggle} />
          Percentile Testing
        </div>

        <div className="d-none d-md-block">
          <Dropdown alignRight>
            <Dropdown.Toggle as="a" style={styles.navbarProfileToggle}>
              <div style={styles.navbarProfileIcon}>
                {Username ? Username[0].toUpperCase() : "U"}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu style={styles.navbarDropdownMenu}>
              <Dropdown.Item
                as={Link}
                to="/my_profile"
                style={styles.navbarDropdownItem}
              >
                My Profile
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/admin_user_management"
                style={styles.navbarDropdownItem}
              >
                User Management
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={handleLogoutAndCloseMenu}
                style={styles.navbarDropdownItem}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        </div>

        <div style={styles.navbarToggle}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={styles.navbarToggle}
          >
            <FaBars className=" text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>

          <Link
            to="/report"
            style={styles.mobileMenuLink}
            onClick={() => setIsOpen(false)}
          >
            Summary Report
          </Link>
          <Link
            to="/admin_user_management"
            style={styles.mobileMenuLink}
            onClick={() => setIsOpen(false)}
          >
            User Management
          </Link>
          <div>
            Price Testing
            <Switch checked={showPriceTesting} onChange={handleSCToggle} />
            Percentile Testing
          </div>
          <Link
            to="/my_profile"
            style={styles.mobileMenuLink}
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>
          <Link
            to="/login"
            style={styles.mobileMenuLink}
            onClick={handleLogoutAndCloseMenu}
          >
            Log Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
