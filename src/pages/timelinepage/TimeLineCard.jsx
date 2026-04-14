import React from "react";

const TimeLineCard = ({ item }) => {
  return (
    <div className="space-y-4 ">
      <div className="flex items-center gap-3 bg-base-100 rounded-md p-4 shadow">
        <div>
          <img src={item.logo} alt="Call" />
        </div>
        <div>
          <p>
            <span className="font-bold">Call</span> with {item.name}
          </p>
          <p>{item.time}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
