import React, { useEffect, useState } from "react";
import bg from "../../image/bg2.jpg";
import card1 from "../../image/card1.png";
import card2 from "../../image/card2.png";
import card3 from "../../image/card3.png";
import card4 from "../../image/card5.png";
import Aos from "aos";
import "aos/dist/aos.css";
const WhyUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [items] = useState([
    {
      service: "Pelayanan Terbaik",
      images: card3,
    },
    {
      service: "24 Hours Services",
      images: card2,
    },
    {
      service: "Harga Bersahabat ",
      images: card4,
    },
    {
      service: "Crew Profesional",
      images: card1,
    },
  ]);

  return (
    <div>
      <h1 className="flex justify-center lg:py-16 py-8 lg:font-bold md:font-bold font-bold sm:font-bold ">
        Mengapa Memilih Layanan Ambulance Jogja ?{" "}
      </h1>
      <div
        data-aos="zoom-in-down"
        className="   mx-auto justify-center grid grid-flow-row gap-4 lg:p-4 p-0 md:p-4 sm:p-4 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 "
      >
        {items.map((items, i) => (
          <div
            key={i}
            className=" transform transition duration-500 hover:scale-110 bg-blue-900 text-white border-r-8 shadow-xl rounded-xl cursor-pointer"
          >
            <div className=" max-w-sm rounded overflow-hidden">
              <img
                data-aos="zoom-out-down"
                className="w-full mx-auto justify-center p-4"
                src={items.images}
              />
              <div className="px-0 py-0">
                <p className=" w-56 justify-center mx-auto text-center font-bold   text-white">
                  {items.service}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
