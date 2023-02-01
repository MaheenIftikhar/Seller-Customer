import React from "react";

import logo from "../asserts/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [agree, setAgree] = useState(true);
  const [validation, setValidation] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    conPass: "",
    check: false,
    role: "customer",
  });
  const navigate = useNavigate();
  let name, value;
  const handleInp = (e) => {
    name = e.target.id;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleCheckbox = () => {
    setAgree(!agree);
    user.check = agree;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validation === true) {
      axios
        .post(
          "/api/users/register",
          {
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            terms: user.check,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          alert(res.data);
          if (res.data === "registered successfully") {
            navigate("/login");
          }
        })
        .catch(function (error) {
          alert("Something went wrong");
        });
    }
  };
  const validate = () => {
    if (!user.name) {
      alert("User name must be filled");
    } else if (!user.email) {
      alert("Email must be filled");
    } else if (!user.password) {
      alert("Password must be filled");
    } else if (!user.conPass) {
      alert("Confirm password must be filled");
    } else if (!user.check) {
      alert("must agree with term and conditions");
    } else if (user.password !== user.conPass) {
      alert("Passwords doen not matched");
    } else if (
      (user.name,
      user.email,
      user.password,
      user.check,
      user.password === user.conPass)
    ) {
      setValidation(true);
    }
  };
  return (
    <div>
      <div className="relative flex bg-white flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-pink rounded-md shadow-md lg:max-w-xl my-10 ">
          <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-orange ">
            Sign up
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="block text-lg font-bold ">
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="name"
                value={user.name}
                onChange={handleInp}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-lg font-bold ">
                Email
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="email"
                value={user.email}
                onChange={handleInp}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-lg font-bold ">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="password"
                value={user.password}
                onChange={handleInp}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="confirm password"
                className="block text-lg font-bold "
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="conPass"
                value={user.conPass}
                onChange={handleInp}
              />
            </div>
            <div className="mb-2 flex">
              <div>
                <input type="checkbox" id="agree" onChange={handleCheckbox} />
                <label htmlFor="agree">
                  {" "}
                  I agree to <b>terms and conditions</b>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 font-bold">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
