import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className=" p-4 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-bold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading ? true : false}
          className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70"
        >
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-4 mt-5">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <span className=" text-blue-400">Sign Up</span>
        </Link>
      </div>
      <p className=" mt-5 text-red-500">
        {error ? error.message || "Something went wrong" : ""}
      </p>
    </div>
  );
};

export default Signin;
