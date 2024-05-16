import React, { useEffect } from "react";
import bg from "../../image/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="flex justify-center py-12 px-4  "
      id="about"
    >
      <a
        href="#"
        className="flex flex-col items-center  text-white border border-gray-600 rounded-lg shadow-xl md:flex-row max-w-3xl    dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className=" object-cover lg:min-w-96 p-4 w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={bg}
          alt=""
        />
        <div className="flex flex-col justify-between p-12 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white justify-center text-center text-black">
            Tentang Kami
          </h1>
          <p className=" font-bold  dark:text-gray-400 text-black mb-4 justify-center flex text-xl">
            CV Layanan Ambulance Jogja
          </p>
          <p className=" font-normal  dark:text-gray-400 text-black mb-4">
            Kami merupakan salah satu badan usaha yang bergerak di bidang safety
            (Keselamatan) dan rescue (Penyelamatan) yang hadir di Kota
            Yogyakarta, Sleman, Bantul, GunungKidul, Klaten,Solo
          </p>
          <p className=" font-normal  dark:text-gray-400 text-black mb-4">
            Kami Menyediakan Layanan Ambulance & Mobil Jenazah 24 Jam, Antar
            Jemput Pasien & Jenazah Dalam atau Luar Kota, Formalin & Peti
            Jenazah. Kami berkomitmen untuk selalu menjaga kualitas dan
            pelayanan dengan harga terbaik. Berbekal dengan pengalaman dan
            didukung oleh tenaga kerja yang profesional kami berharap dapat
            memberikan pelayanan memuaskan bagi para pelanggan dan pengguna jasa
            kami.
          </p>
          <Link
            className="flex justify-center"
            to="https://wa.me/6281904057400"
          >
            <button className="text-black bg-yellow-400 cursor-pointer ">
              <p className="flex justify-center p-4 text-black font-bold ">
                Hubungi Kami
              </p>
            </button>
          </Link>
        </div>
      </a>
    </div>
  );
};

export default About;
