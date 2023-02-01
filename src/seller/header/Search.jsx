import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../asserts/Logo.png";

const Search = () => {
  const products=useSelector(state=> state.products.products)
  const [search,setSearch]=useState()
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
const filterContent=(products, search)=>{
const result= products.filter((products)=>(products.name.includes(search)))
}
const handleText=(e)=>{
const searchText=e.target.value()
filterContent(products, searchText)
}

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <>
      <section className="search">
        {screenSize.dynamicWidth >= 786 ? (
          <div className="container  c_flex">
            <div className=" items-center flex h-full  relative">
              <div className="w-[50px] md:flex-shrink-0">
                <img src={logo} alt="loding..." />
              </div>
              <div>
                <h1 className=" mr-4 text-2xl font-bold sm:text-3xl text-orange">
                  BidBazaar
                </h1>
              </div>
            </div>
            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search and hit enter..." 
              onChange={()=>{
               handleText()
              }}/>
              <button className="py-2 px-4 rounded-r-full border">
                Search
              </button>
            </div>
            <div className="icon f_flex width">
              <i className="fa fa-user icon-circle"></i>
              <div className="cart">
                <Link to="/cart">
                  <i className="fa-solid fa-heart icon-circle"></i>
                  <span>{}</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div class="md:hidden">
            <div class="col">
              <div className=" items-center flex h-full relative">
                <div>
                  <img src={logo} alt="loding..." />
                </div>
                <div className=" w-full ml-4">
                  <h1 className=" mr-4 text-2xl font-bold sm:text-3xl text-orange">
                    BidBazaar
                  </h1>
                </div>
                <div></div>
                <div className="flex">
                  <i className="fa fa-user icon-circle"></i>
                  <div className="cart">
                    <Link to="/cart">
                      <i className="fa-solid fa-heart icon-circle"></i>
                      <span>{}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mt-3">
              <div className="search-box flex h-10">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search and hit enter..." />
                <button className="py-2 px-4 rounded-r-full border">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
