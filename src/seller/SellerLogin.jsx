import logo from "../asserts/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function SellerLogin() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user.auth);
  const isSeller= useSelector(state=> state.user.isSeller)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  let name, value;
  const dispatch = useDispatch();
  const handleInp = (e) => {
    name = e.target.id;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  if (auth && isSeller) {
  window.NavigationPreloadManager.location()
  
  }

  return (
    <div>
      <div className="relative flex   flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-pink rounded-md shadow-md lg:max-w-xl">
          <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-orange ">
            Log in
          </h1>
          <form className="mt-6" onSubmit={sendData}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-lg font-bold ">
                Email
              </label>
              <input
                id="email"
                value={user.email}
                type="email"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={handleInp}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-lg font-bold ">
                Password
              </label>
              <input
                id="password"
                value={user.password}
                type="password"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={handleInp}
              />
            </div>
            <div className="text-lg text-orange font-bold hover:underline">
              {" "}
              <Link to=""> Forget Password?</Link>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 font-bold">Login</button>
            </div>
          </form>
          <p className="mt-8 text-lg font-light text-center">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/cusSignup"
              className="font-medium text-lg text-orange hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
