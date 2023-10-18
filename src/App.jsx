import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupAndLoginComp from "./Routes/Signupandlogin/SignupAndLoginComp";
import UserDetails from "./components/UserDetails/UserDetails";
import { useContext } from "react";
import { UserAuthcontext } from "./Context/Userauth.context";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ element }) {
  const { user } = useContext(UserAuthcontext);

  if (!user) {
    // If the user is not signed in, redirect to the login page
    return <Navigate to="/" />;
  }

  // If the user is signed in, render the specified element
  return element;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupAndLoginComp />} />
        {/* Use the PrivateRoute for the protected page */}
        <Route
          path="/userdetails"
          element={<PrivateRoute element={<UserDetails />} />}
        />
      </Routes>
    </>
  );
}

export default App;
