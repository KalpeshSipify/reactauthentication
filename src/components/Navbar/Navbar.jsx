import { useContext } from "react";
import navbarstyle from "./navbar.module.css";
import { googleLogout } from "@react-oauth/google";
import { UserAuthcontext } from "../../Context/Userauth.context";

const Navbar = () => {
  const { user, setuser, setuserprofile } = useContext(UserAuthcontext);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setuser(false);
    setuserprofile(null);
  };
  return (
    <div className={navbarstyle.maincontainer}>
      <div>
        <div className={navbarstyle.logodiv}>
          <p>WorkDays</p>
        </div>
        <div className={navbarstyle.loginbuttondiv}>
          {user ? (
            <button onClick={logOut}>SIGNOUT</button>
          ) : (
            <button>SIGNIN</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
