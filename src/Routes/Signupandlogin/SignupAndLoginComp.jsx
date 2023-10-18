import LoginForm from "../../components/LoginForm/LoginForm";
import SignUp from "../../components/SignUpForm/SignUp";
import style from "./signupandlogin.module.css";

const SignupAndLoginComp = () => {
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.insidecontainerone}>
          <SignUp />
        </div>
        <div className={style.insidecontainertwo}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default SignupAndLoginComp;
