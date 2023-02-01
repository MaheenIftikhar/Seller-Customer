import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singleProduct } from "../../actions";
import Product from "./Product";

export default function Products() {
  const products = useSelector((state) => state.products.products);
  const navigate= useNavigate()
  const dispatch=useDispatch()
  return (
    <>
      <section className="flash ">
        <div className=" heading flex">
          <div className=" w-full ">
            <div className="container text-[25px] flex">
              {products.map((product) => {
                return (<div onClick={()=>{
                  dispatch(singleProduct(product._id))
                  navigate("/productDetail")
                 }}><Product product={product} />;</div>)
              })}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
