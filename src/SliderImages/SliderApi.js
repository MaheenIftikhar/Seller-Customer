import img1 from "../asserts/slider2.webp";
import img2 from "../asserts/sileder1.jpg";
import img3 from "../asserts/slider3.webp";
export const SliderApi = [
  {
    src: `${img2}`,
    content: {
      h2: "Amazing Deals througout the year",
      p: "Win your favourite products and save money",
    },
    background: " bg-[#649F29]",
  },
  {
    src: `${img3}`,
    active: true,
    content: {
      h2: "Amazing Deals througout the year",
      p: "Upto 40% off",
    },
    background: " bg-[#9F9CDD]",
  },
  {
    src: `${img1}`,
    active: true,
    content: {
      h2: "Geeto or la jao",
      p: "Upto 40% off",
    },
    background: " bg-[#FFFFFF]",
  },
];
