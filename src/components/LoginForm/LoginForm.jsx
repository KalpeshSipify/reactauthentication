import { useNavigate } from "react-router-dom";
import GoogleAuthentication from "../Googleauth/GoogleAuthentication";
import formstyle from "./loginform.module.css";
import { useContext, useState } from "react";
import { UserAuthcontext } from "../../Context/Userauth.context";
import { Auth } from "aws-amplify";

const LoginForm = () => {
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigate();
  const { setuser, user, setuserprofile } = useContext(UserAuthcontext);
  const handleonchange = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleonsubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formdata;
    try {
      // Attempt user sign-in
      const user = await Auth.signIn({ username, password });
      if (user) {
        // Sign-in successful
        setuser(true);
        navigation("/userdetails");

        // Fetch user profile data
        const userData = await Auth.currentAuthenticatedUser();
        setuserprofile(userData.attributes);
      } else {
        // User not found
        alert("User not found");
      }
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <>
      <div className={formstyle.form}>
        <div className={formstyle.headingdiv}>
          <p>I Already Have An Account</p>
        </div>
        <div className={formstyle.logininput}>
          <form onSubmit={handleonsubmit}>
            <input
              type="usernaem"
              placeholder="Enter Your Username"
              name="username"
              value={formdata.email}
              onChange={handleonchange}
              required
            />
            <input
              type="Password"
              placeholder="Enter Your Password.."
              name="password"
              value={formdata.password}
              onChange={handleonchange}
              required
            />
            <div className={formstyle.buttondiv}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <p>OR</p>
        <div className={formstyle.googleloginbutton}>
          {/* <GoogleAuthentication /> */}
          <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
            goolge
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
