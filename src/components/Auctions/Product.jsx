import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        <div className="  flex flex-wrap -m-4 ml-2  ">
          <div className=" lg:w-1/4 md:w-1/2 ">
            <div
              className=" product mtop "
              style={{ height: "400px", width: "300px" }}
            >
              <div className="overflow-hidden  " key={props.item._id}>
                <div className=" border-b-2  border-orange">
                  <div className=" overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={`http://localhost:3000/uploads/${props.item.images[0].img}`}
                      alt=""
                    />
                  </div>
                  <div className="product-like">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="product-details  ">
                  <h3 className="underline ">{props.item.name}</h3>
                  <div className="text-base price font-semibold ">
                    <h4>RS {props.item.price}</h4>
                  </div>
                  <div>
                    <div className="flex ">
                      <div className=" mr-2 text-orange text-base ">
                        time-left:
                      </div>
                      <div className=" jsutify-content-between align-item-center"></div>
                       {days * 24 + hours} : {minutes} : {seconds}
                    </div>
                    <div className="flex">
                      <div className="text-base">bids: </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
};

export default function Product({ product }) {
  return (
    <Countdown date={ product.duration} item={product} renderer={renderer} />
  );
}
