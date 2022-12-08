import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/LogIn/login";
import SignUp from "./Components/SignUp/signup";
import TeachStu from "./Components/TeachStu/TeachStu";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<SignUp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/" element={<TeachStu />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
