import React, { useEffect } from "react";
import "./Auction.css";
import Products from "./Products";
import { allProducts, getAllCategory } from "../../actions";

import { useSelector, useDispatch } from "react-redux";

export default function Auction() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <section className="home ">
        <div className="bg-pink  mt-[3%] ">
          <div className="flex flex-col mt-10">
            <div className=" flex heading text-[25px]">
              {" "}
              <i className="fa fa-bolt mr-4"></i>
              <h1>Filter</h1>
            </div>

            <div className=" flex product items-center justify-between mt-3">
              <div className="flex flex-col   md:flex-row">
                <p className="mb-3 md:mb-1 text-orange">Categories</p>
                {categories ? (
                  <select className="md:ml-3 border-2 p-2 rounded-lg hover:border-orange">
                    <option selected>Select</option>

                    {categories.map((value, index) => {
                      return (
                        <option className="box f_flex" key={index}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  () => {
                    "Loading...";
                  }
                )}
              </div>
              <div className="  flex flex-col  md:flex-row ">
                <p className="mb-3 md:mb-1 text-orange">Price</p>
                <select className=" ml-3 border-2 p-2 rounded-lg hover:border-orange">
                  <option selected>Lower to higher</option>
                  <option>Higher to Lower</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className=" heading flex">
          <div className=" w-full ">
            <div className="text-[25px] flex">
              {" "}
              <i className="fa fa-bolt"></i>
              <h1>On Auction</h1>
            </div>
            {products ? (
              <div className=" bg-sky  d_flex">
                <Products />
              </div>
            ) : (
              "no products found"
            )}
          </div>
        </div>
      </section>
    </>
  );
}
