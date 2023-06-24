import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo =
    "";
  const handleClick = () => {
    setHamActive(!hamActive);
  };
  const navigate = useNavigate();
  function navigateFunc(){

        navigate('/roleselection');
  }
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        {/* <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
<<<<<<< HEAD
        </button> */}
        {/* <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" className={styles.brand} />
        </div> */}
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            {/* <div className={styles.verticalLine}> </div> */}
            {/* <a href="/" className={`${styles.nav} center`}>
              Departments
            </a> */}
            {/* <a href="/" className={`${styles.nav} center`}>
              More ways to shop
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Help
            </a> */}
=======
        </button>
        <div className={`${styles.navLeft}`}>
          <h1>Genesis</h1>
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
>>>>>>> 260c276e80bf07d41a593f7807f767140497de74
          </div>
          <div>
            <a href="/loginroleselection" className={styles.login}>
              Log in
            </a>
            <button className={styles.signup} onClick={navigateFunc}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
