import React from "react";
import { Link } from "react-router-dom";

const Contac = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-blue-800 pt-16 pb-8 gap-6 p-8 ">
      <h1 className="font-bold text-white text-xl" id="contac">
        Hubungi kami sekarang juga dan dapatkan layanan terbaik dari kami
      </h1>
      <p className="text-white flex items-center text-center max-w-xl">
        Kami berkomitmen untuk selalu menjaga kualitas dan pelayanan dengan
        harga terbaik. Berbekal dengan pengalaman dan didukung oleh tenaga kerja
        yang profesional kami berharap dapat memberikan pelayanan memuaskan bagi
        para pelanggan dan pengguna jasa kami.
      </p>
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

export default Contac;
