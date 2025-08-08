import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import { ToastContainer } from "react-toastify";
import MyContextProvider from "./context/MyContext";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./Layout/Protectedroute";


function App() {
  const num = 5;
  return (
    <BrowserRouter>
      <MyContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                condition={num % 2 == 0}
                redirect={"/forgotPassword"}
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
