import React, { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendContext";
import TimeLineCard from "./TimeLineCard";
import TextCard from "./TextCard";
import VideoCard from "./VideoCard";

const TimeLinePage = () => {
  const { timeline } = useContext(FriendsContext);
  const [filter, setFilter] = useState("all");
  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);
  return (
    <div className="w-11/12 mx-auto p-5 space-y-5">
      <h2 className="text-2xl font-bold mb-6 mt-5">Timeline</h2>
      <select
        className="select select-bordered w-full max-w-xs"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      {filteredTimeline.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold">No Activities Found</h3>
          <p className="text-gray-500 mt-2">
            No {filter !== "all" ? filter : ""} interactions yet.
          </p>
        </div>
      ) : (
        filteredTimeline.map((item, index) =>
          item.type === "call" ? (
            <TimeLineCard key={index} item={item}></TimeLineCard>
          ) : item.type === "text" ? (
            <TextCard key={index} item={item}></TextCard>
          ) : (
            <VideoCard key={index} item={item}></VideoCard>
          )
        )
      )}
    </div>
  );
};

export default TimeLinePage;
