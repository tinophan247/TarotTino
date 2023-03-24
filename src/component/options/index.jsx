import React from "react";
import { NavLink } from "react-router-dom";

const Options = ({name,img,color,link }) => {
  return (
    <div className="flex justify-center w-80 h-96 p-20 bg-slate-300 rounded-2xl ">
      <div>
        <p className="flex justify-center text-3xl font-bold ">{name}</p>
        <img className="w-32 mt-5 ml-3" src={img} alt="not-found" />
        <button className={`m-auto font-semibold w-40 h-10 text-lg ${color} mt-5 rounded-lg`}>
          <NavLink to={link}>Xem ngay</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Options;
