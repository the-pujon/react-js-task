import React from "react";
import { FaStar } from "react-icons/fa";


const TVShowCard = ({ show }) => {
  console.log(show);
  return (
    <div className="w-full h-[17rem] rounded overflow-hidden m-4">
      <div className="flex w-full gap-10">
        <div className="" >
          <img src={show?.image?.original} alt="img" className="w-52 h-[17rem]" />
        </div>
        <div className="flex-1 p-5 flex flex-col gap-3" >
          {/* name */}
          <div className="flex w-full justify-between"  >
            <div className="text-5xl font-thin" >{show?.name}</div>
            <div className="flex items-center gap-2 badge"  > <FaStar /> {show?.rating.average} </div>
          </div>

          {/* badge */}
          <div className="flex gap-3" >{show?.genres.map((genre, i)=>(
            <div key={i} className="badge badge-outline">{genre}</div>
          ))}</div>
          <div>
            Language: {show?.language}
          </div>
          <div>
            Status: {show?.status}
          </div>

          <div>
            Schedule: {show?.schedule?.time} on {show?.schedule?.days}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
