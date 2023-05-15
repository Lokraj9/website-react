import Header from "./components/Header";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter ,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="sign-in" element={<SignIn/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="forgot-password" element={<ForgetPassword/>}/>
      <Route path="offers" element={<Offers/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
