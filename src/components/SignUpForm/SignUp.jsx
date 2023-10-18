import signupstyle from "./signup.module.css";
import { useState } from "react";
import { Auth } from "aws-amplify";

const SignUp = () => {
  const [formdata, setformdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleonchange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleonsubmit = async (e) => {
    const { name, username, email, password } = formdata;
    e.preventDefault();
    try {
      // Sign up the user
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
        autoSignIn: true, // Enable auto sign-in after confirmation
      });

      if (user) {
        alert("Sucessfully Signup");
        setTimeout(() => {
          setformdata({
            name: "",
            username: "",
            email: "",
            password: "",
          });
        }, 1500);
      }
      // You can add additional actions or redirections after successful sign-up here.
    } catch (error) {
      console.log("Error signing up:", error);
      
      // You can handle errors more specifically if needed.
    }
  };

  return (
    <>
      <div className={signupstyle.form}>
        <div className={signupstyle.headingdiv}>
          <p>I Do Not Have An Account</p>
        </div>
        <div className={signupstyle.logininput}>
          <form onSubmit={handleonsubmit}>
            <input
              type="text"
              value={formdata.phonenumber}
              placeholder="Enter Your Name"
              name="name"
              onChange={handleonchange}
              required
            />
            <input
              type="Text"
              value={formdata.username}
              placeholder="Enter Your UserName.."
              name="username"
              onChange={handleonchange}
              required
            />
            <input
              type="Email"
              value={formdata.email}
              placeholder="Enter Your Email.."
              name="email"
              onChange={handleonchange}
              required
            />
            <input
              type="Password"
              value={formdata.password}
              placeholder="Enter Your Password.."
              name="password"
              onChange={handleonchange}
              required
            />

            <div className={signupstyle.buttondiv}>
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
