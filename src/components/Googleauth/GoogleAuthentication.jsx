import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { UserAuthcontext } from "../../Context/Userauth.context";
import googleauthstyle from "./googleauth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function GoogleAuthentication() {
  const { setuser, setuserprofile } = useContext(UserAuthcontext);
  const navigation = useNavigate();

  const onSuccess = (codeResponse) => {
    // Perform the API request here directly
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setuserprofile(res.data);
        setuser(true);
        navigation("/userdetails");
      })
      .catch((err) => console.log(err));
  };

  const onError = (error) => {
    console.log("Login Failed:", error);
  };

  const login = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <>
      <div className={googleauthstyle.buttondivcontainer}>
        <div className={googleauthstyle.googlelogo}>
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ color: "#ffffff", height: "1.6rem" }}
          />
        </div>
        <button className={googleauthstyle.loginbutton} onClick={() => login()}>
          Login With Google
        </button>
      </div>
    </>
  );
}

export default GoogleAuthentication;
