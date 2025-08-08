import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetOperation } from "../functions/handleGetOperation";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const handleAuth = async () => {
      const result = await handleGetOperation("/auth/verify/home");

      console.log("result", result);
      if (result.status === 200) {
        toast.success("Login Successfully!");
      } else {
        toast.error("Please Login first");
        navigate("/login");
      }
    };
    handleAuth();
  }, []);
  // const handleSave =() => {
  //   localStorage.setItem("name", "Anisha")
  // };
  // const handleGet =() => {
  //   const name = localStorage.getItem("name");
  //   console.log(name);
  // };
  // const handleClear =() => {
  //   localStorage.removeItem("name")
  // };
  // const handleClearAll =() => {
  //   localStorage.clear()
  // };

  return (
    <div>
      <h1>Home Page</h1>
      {/* <div className='flex gap-2'>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleGet}>Get</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>       */}
    </div>
  );
};

export default Home;
