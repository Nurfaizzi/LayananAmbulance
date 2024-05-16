import React from "react";

const Informasi = () => {
  return (
    <div className="flex flex-col justify-center text-4xl font-bold lg:p-12 p-0  ">
      <h1 className="flex  justify-center mb-8 text-black">INFORMASI</h1>
      <div className=" rounded-2xl flex  justify-center">
        <iframe
          className=" lg:w-full sm:w-full md:w-full w-72 lg:p-6 p-2 justify-center items-center flex "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.821626596111!2d110.45627521083634!3d-7.808699177495801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a51af533d3fed%3A0x5f8cf53150024eaf!2sDjogdja%20AMBULANCE%20SERVICE!5e0!3m2!1sid!2sid!4v1715844005857!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Informasi;
