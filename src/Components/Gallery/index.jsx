import React, { useEffect, useState } from "react";
import galery1 from "../../image/galery1.jpg";
import galery2 from "../../image/galery2.jpg";
import galery3 from "../../image/galery3.jpg";
import galery4 from "../../image/galery4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Galery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [galery] = useState([
    {
      images: galery1,
    },
    {
      images: galery2,
    },
    {
      images: galery3,
    },
    {
      images: galery4,
    },
  ]);

  return (
    <div className="pt-24  justify-center items-center flex flex-col">
      <h1 className=" font-bold text-4xl mb-8" id="galery">
        Galery
      </h1>
      <div className="grid gap-8 pl-8  m-auto p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  border-blue-500  ">
        {galery.map((obj, key) => (
          <div key={key} data-aos="zoom-in-left">
            <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 translate-x-3 transform">
              <a href="#">
                <img
                  className="object-fill h-full w-full rounded-xl shadow-xl "
                  src={obj.images}
                  alt=""
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
