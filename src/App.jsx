import React from "react";
// import HeaderBar from "./Components/headerBar";
// import Preliminary from "./Components/Preliminary";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import Quiz from "./pages/Quiz";
import Students from "./pages/Students";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import LogIn from "./pages/logIn";
import NewPassword from "./pages/newPassword";
import NonFound from "./pages/NonFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Payment" element={<Payments />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
    </>
  );
}

export default App;
