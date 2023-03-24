import React from "react";
import Options from "../../component/options";
import { optionDatas } from "../../constant";

const Home = () => {
  return (
    <div className="w-full h-screen ">
      <div>
        <div className="flex h-40 justify-center items-center text-4xl font-bold">
          Chọn vấn đề bạn muốn xem nhé
        </div>
        <div className="flex justify-around ">
          {optionDatas.length > 0 &&
            optionDatas.map((item, index) => (
              <Options
                key={index}
                link={item.link}
                name={item.name}
                img={item.img}
                color={item.color}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
