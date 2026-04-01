import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout"); //http://localhost:5000 isme changes krne hai 
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);  // alert vala code add krna hai
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out (toast part)");
    }
  };
  return (
    <>
      <hr />
      <div className=" h-[10vh] bg-transparent">
        <div className="flex ">
          <BiLogOutCircle
            className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-2"
            onClick={handleLogout}
          /><span className="mt-5 text-bold">LOGOUT</span>
        </div>
      </div>
    </>
  );
}

export default Logout;
