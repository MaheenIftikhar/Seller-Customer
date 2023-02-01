import React, { useState } from "react";
import "./style.css";
import "./Slider.css";
import Data from "../../SliderImages/Data";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSelector } from "react-redux";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

export default function NewArrivalPro() {
  const [data] = useState(Data.productItems);
 const products=useSelector(state=>state.products.products)

  return (
    <>
    <Slider {...settings}>
  
        {products.map((product) => {
          return (
            <div className="box container h-[10%]">
     
            <div className="product ">
            <div className="overflow-hidden "   key={product.id}>
              <div className="h-[20%] border-b-2  border-orange">
                <img src={`http://localhost:3000/uploads/${product.images[0].img}`}alt="" />
                <div className="product-like">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="product-details  ">
                <h3 className="underline " >{product.name}</h3>
               
                <div className="price font-semibold ">
                  <h4>RS {product.price}</h4>
                </div>
                <div className="flex mt-3 text-sm  ">
                <div className="pr-6 ">
                  <p>bids: {product.bids}</p>
                </div>
                <div >
                  <p>time-left: {product.time}</p>
                </div>
                </div>
                
              </div>
            </div>
            </div>
     
     </div>
          );
        })}

  
    </Slider>
    </>
  );
}
