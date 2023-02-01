import React from "react";
import cont1 from "../asserts/cont1.jpg";
import cont2 from "../asserts/cont2.jpg";
import cont3 from "../asserts/cont3.jpg";
import logo from "../asserts/Logo.png";

export default function Contactus() {
  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="p-4 mb-10 ">
            <h1 className="text-3xl text-orange font-bold">Contact us</h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2 border-orange  rounded-lg overflow-hidden bg-grey">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={cont1}
                  alt="blog"
                />
                <div className="p-6  ">
                  <h1 className="title-font text-2xl text-orange font-medium text-gray-900 mb-3">
                    Address
                  </h1>
                  <p className=" mb-3">
                    Block 7/8, K.C.H.S.U, Shaheed-E-Millat Road, Lahore,
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-orange border-opacity-60 bg-grey rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={cont2}
                  alt="blog"
                />
                <div className="p-6 ">
                  <h1 className="title-font text-2xl text-orange font-medium text-gray-900 mb-3">
                    Email
                  </h1>
                  <p className="leading-relaxed mb-3">bidBazaar@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-orange bg-grey border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={cont3}
                  alt="blog"
                />
                <div className="p-6 ">
                  <h1 className="text-orange title-font text-2xl font-medium text-gray-900 mb-3">
                    Contact
                  </h1>
                  <p className="leading-relaxed mb-3">0332 1742259</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-600 body-font  mb-20 bg-grey">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
          <div className="lg:w-3/5 md:w-1/2 ml-[25%]  md:ml-0 md:pr-18 lg:pr-0 pr-0 ">
            <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={logo}
              />
            </div>
            <h1 className="text-orange title-font font-bold text-3xl text-gray-900">
              Get in touch
            </h1>
            <p className="leading-relaxed mt-4 font-medium">
              Any question? We'd love to here from you
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 border-orange border-4 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Leave your message
            </h2>
            <div className="relative mb-4 ">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border-2 border-orange focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border-2 border-orange focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-3 pt-0 ">
              <textarea
                placeholder="Your message"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-2 border-orange shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
