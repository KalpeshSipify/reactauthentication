import { useContext } from "react";
import userdetailsstyle from "./userdetails.module.css";
import { UserAuthcontext } from "../../Context/Userauth.context";

const UserDetails = () => {
  const { userprofile } = useContext(UserAuthcontext);

  return (
    <>
      <div className={userdetailsstyle.maincontainer}>
        <div>
          <h3>Welcome: {userprofile.name}</h3>
          {userprofile.picture ? (
            <img src={userprofile.picture} alt="Loading image..." />
          ) : (
            <img
              src={`https://robohash.org/${userprofile.name}?set=set2`}
              alt="loading img"
            />
          )}

          <p>Name: {userprofile.name}</p>
          <br />
          <p>UserEmail: {userprofile.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
