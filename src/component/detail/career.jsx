import React from "react";
import { cardDetailDatas } from "../../constant";
import { ramdomArray } from "../../utils/helpers";

function Career() {
  const shuffledPosts = ramdomArray(cardDetailDatas);

  return (
    <div>
        <div className=" grid grid-cols-3 w-full h-screen">
          <div className="flex justify-center items-center col-span-1">
            <img className="w-72" src={shuffledPosts.img} alt="not-found" />
          </div>
          <div className="flex justify-center items-center col-span-2 ">
            <div className="w-800 max-h-600 bg-slate-200 rounded-xl p-5 text-xl">
              <div dangerouslySetInnerHTML={{ __html: shuffledPosts.career }} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Career;
