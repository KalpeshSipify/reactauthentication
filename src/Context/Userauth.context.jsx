import { createContext, useState } from "react";

export const UserAuthcontext = createContext({
  user: false,
  setuser: () => {},
  userprofile: [],
  setuserprofile: () => {},
});

// eslint-disable-next-line react/prop-types
export const UserAuthProvider = ({ children }) => {
  const [user, setuser] = useState(false);
  const [userprofile, setuserprofile] = useState([]);
  const value = {
    user,
    setuser,
    userprofile,
    setuserprofile,
  };
  return (
    <UserAuthcontext.Provider value={value}>
      {children}
    </UserAuthcontext.Provider>
  );
};
