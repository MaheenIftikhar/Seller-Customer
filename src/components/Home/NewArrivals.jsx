import React, { useState } from "react";
import NewArrivalPro from "./NewArrivalPro";
import Data from "../../SliderImages/Data";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NewArrivals = ({ producctItems }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flash bg-pink">
        <div className=" container ">
          <div className="heading f_flex">
            <div className="flex w-full text-xl">
              {" "}
              <i className="fa fa-bolt"></i>
              <h1>New Arrivals</h1>
            </div>
            <div
              className="text-right text-orange underline  hover:cursor-pointer hover:hover:underline-offset-4 mx-4 pr-4  w-[10%]"
              onClick={() => {
                navigate("/auction");
              }}
            >
              See all
            </div>
          </div>
          <NewArrivalPro producctItems={producctItems} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
