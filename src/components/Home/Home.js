import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NewArrivals from "./NewArrivals";
import Products from "../Auctions/Products";
import "./Home.css";
import SliderHome from "./Slider";
import Wrapper from "./Wrapper";

import { useDispatch, useSelector } from "react-redux";
import { allProducts, getAllCategory } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <section className="home ">
        <div className="container  d_flex">
          <SliderHome />
        </div>
        {products ? (
          <>
            <section className="flash bg-sky">
              <div>
                <div className="heading  flex">
                  <div className="flex text-2xl w-full">
                    {" "}
                    <i className="fa fa-bolt"></i>
                    <h1>Recommended</h1>
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
                {products ? (
                  <Products products={products} />
                ) : (
                  "no products found"
                )}
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        <div className="bg-black ">
          <Wrapper />
        </div>
      </section>
    </>
  );
};

export default Home;
