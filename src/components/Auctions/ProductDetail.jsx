import React, { useState } from "react";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  } else {
    return (
      <span>
        <div className="  flex flex-wrap -m-4 ml-2  ">
          <div className=" jsutify-content-between align-item-center"></div>
          {days * 24 + hours} : {minutes} : {seconds}
        </div>
      </span>
    );
  }
};

export default function ProductDetail() {
  const product = useSelector((state) => state.products.product);
  const arrowStyle = "flex  justify-center items-center hover:cursor-pointer";
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
  };
  //States

  const [slides] = useState(product.images);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const setBid=()=>{
   
  }
  return (
    <div>
      <div className=" h-full flex justify-center bg-sky flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className={arrowStyle} onClick={prevSlide}>
            <i className="fa-solid fa-caret-left font-[50px]"></i>
          </div>
          {slides.map((slide, index) => {
            if (index === activeSlide) {
              return (
                <div
                  className=" w-auto  lg:w-1/2 flex-1 flex items-center justify-center"
                  key={index}
                >
                  <img
                    src={`http://localhost:3000/uploads/${slide.img}`}
                    className="product"
                    alt="product_image"
                    style={{ height: "450px" }}
                  />
                </div>
              );
            }
          })}
          <div className={arrowStyle} onClick={nextSlide}>
            <i className="fa-solid fa-caret-right font-[50px]"></i>
          </div>
        </div>

        <div className=" product w-full  flex-[1.3] lg:w-1/2 flex-wrap flex flex-col sm:items-start md:items-center  justify-items-center mt-10 ">
          <h1 className=" mb-5 text-[40px] ">{product.name}</h1>
          <div>------------------------------------------------------</div>
          <div className="flex">
            <div className="mt-1  mr-8">
                  <Countdown
                    date={ product.duration}
                    item={product}
                    renderer={renderer}
                  />
      
            </div>
            <div>
              <h4>
                | Bids: <b> 3</b>{" "}
              </h4>
            </div>
          </div>
          <div>------------------------------------------------------</div>
          <div className="  flex flex-col place-self-start  w-full">
            <p className="mt-7 text-xl">
              Current Price - <b>RS: {product.currentPrce}</b>
            </p>
            <p className="mt-7 text-xl">
              Minimun Bid - <b>RS: {product.currentPrce + 1}</b>
            </p>

            <div className="mt-7 flex p-2 w-full text-xl">
              <div className=" mr-[5%] md:mr-[30%]">Set your bid</div>
              <div className="border-2 rounded-lg">
                <input
                  type="text"
                  className="border-2 rounded-lg p-2"
                  placeholder="enter price"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="mt-8 p-3 w-[50%] ml-[25%]" onClick={()=>{

            }}>place bid</button>
          </div>
        </div>
      </div>
      <hr className="border border-orange" />
      <div className="container">
        <div className=" pt-5   text-xl">Item Info</div>
        <div className="p-5 ">
          <h3 className="text-orange mt-3">Quantity:</h3>
          <p className="mt-3">{product.quantity}</p>

          <h3 className="text-orange mt-3">Condition:</h3>
          <p className="mt-3">{product.condition}</p>
          <h3 className="text-orange mt-3">Category:</h3>
          <p className="mt-3">{product.categoryName}</p>
          <h3 className="text-orange mt-3">Discription:</h3>
          <p className="mt-3">{product.discription}</p>
        </div>
      </div>
    </div>
  );
}
