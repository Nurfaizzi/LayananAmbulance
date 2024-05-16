import React, { useEffect, useState } from "react";
import card1 from "../../image/bg.jpg";
import card2 from "../../image/service2.png";
import card3 from "../../image/service3.jpg";
import card4 from "../../image/service4.png";
import card8 from "../../image/service8.png";
import card5 from "../../image/service5.png";
import card7 from "../../image/service7.png";
import card6 from "../../image/service6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [items] = useState([
    {
      name: " Ambulance Jenazah",
      image: card1,
    },

    {
      name: "Formalin Jenazah",
      image: card2,
    },
    {
      name: "Pemandian Jenazah",
      image: card3,
    },
    {
      name: "Penjualan Peti Jenazah",
      image: card4,
    },
    {
      name: "Cargo Jenazah",
      image: card5,
    },
    {
      name: "Ambulance Medis",
      image: card6,
    },
    {
      name: "PAM Event Tententu",
      image: card7,
    },
    {
      name: "Emergency Response ",
      image: card8,
    },
  ]);

  return (
    <div className="pt-12 pb-8 justify-center flex flex-col bg-blue-800">
      <div
        className="pt-16  p-4 flex flex-col justify-center text-center"
        id="service"
      >
        <h1
          data-aos="zoom-in-down"
          className=" text-white font-bold text-4xl mb-8"
        >
          PELAYANAN KAMI
        </h1>
        <p
          data-aos="zoom-in-down"
          className="flex justify-center items-center text-center w-full text-white"
        >
          Kami Menyediakan Layanan Ambulance & Mobil Jenazah 24 Jam Kami
          berkomitmen untuk selalu menjaga kualitas dan pelayanan dengan harga
          terbaik. Berbekal dengan pengalaman dan didukung oleh tenaga kerja
          yang profesional kami berharap dapat memberikan pelayanan memuaskan
          bagi para pelanggan dan pengguna jasa kami.
        </p>
      </div>
      <div className="grid gap-8 pl-8  m-auto p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-blue-500  ">
        {items.map((obj, key) => (
          <div key={key}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 translate-x-3 transform"
            >
              <a href="#">
                <img
                  className="object-fill h-32 w-full "
                  src={obj.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="m-auto text-center mb-2 text-96 font-bold tracking-tight text-gray-900 dark:text-white">
                    {obj.name}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"https://wa.me/6281904057400"}>
          <button className="text-black bg-yellow-400 hover:bg-white cursor-pointer  lg:w-96 w-80 rounded-lg ">
            <p className="flex justify-center p-4  font-bold text-black ">
              Hubungi Kami
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
