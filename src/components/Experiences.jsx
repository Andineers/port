import React from "react";

const Experiences = () => {
  return (
    <section
      className="experience py-24 px-4 bg-black text-white text-center"
      id="experience"
    >
      <h2 className="text-4xl font-bold text-center mb-20 primary-color">Experience</h2>
      <div className="timeline relative max-w-6xl mx-auto before:absolute before:content-[''] before:w-1 before:h-full before:bg-cyan-500 before:left-1/2 before:transform before:-translate-x-1/2">
      
        <div className="timeline-item relative mb-10 flex items-center w-full">
          <div className="timeline-dot bg-cyan-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 rounded-full h-4 w-4 top-0">
            <span className="timeline-date text-cyan-500 text-lg font-extrabold absolute left-[30px] whitespace-nowrap">
              8 Maret 2021 - 31 Mei 2022
            </span>
          </div>
          <div className="timeline-content bg-gray-800 border border-cyan-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ml-auto w-[calc(100%-80px)] md:w-[calc(50%-80px)] text-right relative top-[40px]">
            <h3 className="text-xl text-white mb-2 font-medium">
              PT. HTM INDONESIA
            </h3>
            <p className="text-sm text-white mb-4 font-medium">
              Operator Production
            </p>
            <p className="text-white text-sm font-light leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. esse?
            </p>
          </div>
        </div>
        

        <div className="timeline-item relative mb-10 flex items-center w-full">
          <div className="timeline-dot bg-cyan-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 rounded-full h-4 w-4 top-0">
            <span className="timeline-date text-cyan-500 text-lg font-extrabold absolute right-[calc(100%+20px)] whitespace-nowrap">
              22 Agustus 2022 - 22 November 2022
            </span>
          </div>
          <div className="timeline-content bg-gray-800 border border-cyan-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 mr-auto w-[calc(100%-80px)] md:w-[calc(50%-80px)] text-left relative top-[40px]">
            <h3 className="text-xl text-white mb-2 font-medium">
              PT. FORISA NUSAPERSADA
            </h3>
            <p className="text-sm text-white mb-4 font-medium">Packing</p>
            <p className="text-white text-sm font-light leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum
              suscipit libero natus laborum nam vitae quod ratione voluptate
              esse?
            </p>
          </div>
        </div>

        <div className="timeline-item relative mb-10 flex items-center w-full">
          <div className="timeline-dot bg-cyan-500 shadow-lg absolute left-1/2 transform -translate-x-1/2 rounded-full h-4 w-4 top-0">
            <span className="timeline-date text-cyan-500 text-xl font-extrabold absolute left-[30px] whitespace-nowrap">
              4 Desember 2023 - 18 mei 2024
            </span>
          </div>
          <div className="timeline-content bg-gray-800 border border-cyan-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ml-auto w-[calc(100%-80px)] md:w-[calc(50%-80px)] text-right relative top-[40px]">
            <h3 className="text-xl text-white mb-2 font-medium">
              PT. DUNIA BUTTON INDONESIA
            </h3>
            <p className="text-sm text-white mb-4 font-medium">
              Design & Quality Control
            </p>
            <p className="text-white text-sm font-light leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. esse?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
