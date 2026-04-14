import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { FriendsContext } from "../../context/FriendContext";

const FriendDetails = () => {
  const friends = useLoaderData();
  const { id } = useParams();
  const { timeline, setTimeline, callLogo, textLogo, videoLogo } =
    useContext(FriendsContext);
  const handleCall = () => {
    const newItem = {
      ...expectedFriend,
      type: "call",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      logo: callLogo,
    };
    setTimeline([...timeline, newItem]);
    toast.success("Call is Successfully!");
  };
  const handleText = () => {
    const newItem = {
      ...expectedFriend,
      type: "text",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      logo: textLogo,
    };
    setTimeline([...timeline, newItem]);
    toast.success("Text is Success!");
  };
  const handleVideo = () => {
    const newItem = {
      ...expectedFriend,
      type: "video",
      time: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      logo: videoLogo,
    };
    setTimeline([...timeline, newItem]);
    toast.success("Video is Success!");
  };
  const expectedFriend = friends.find((fnd) => fnd.id == id);
  return (
    <div className="grid grid-cols-10 gap-4 grid-rows-3 mt-10 w-11/12 mx-auto">
      <div className="row-span-2 col-span-4 bg-base-100 p-4 rounded-md shadow-md">
        <div className="space-y-4 cursor-pointer text-center">
          <div className="flex justify-center items-center ">
            <img
              className="rounded-full"
              src={expectedFriend.picture}
              alt={expectedFriend.name}
            />
          </div>
          <h3 className="text-2xl font-bold">{expectedFriend.name}</h3>
          <p
            className={`rounded-full w-fit px-3 mx-auto text-white ${
              expectedFriend.status == "almost due"
                ? "bg-[#EFAD44]"
                : expectedFriend.status == "overdue"
                ? "bg-[#EF4444]"
                : "bg-[#244D3F]"
            }`}
          >
            {expectedFriend.status}
          </p>
          <div className="flex gap-4 justify-center items-center">
            {expectedFriend.tags.map((tag, idx) => (
              <p className="bg-[#CBFADB] rounded-full px-3" key={idx}>
                {tag}
              </p>
            ))}
          </div>
          <p className="italic font-bold text-gray-500">
            "{expectedFriend.bio}"
          </p>
          <p className="text-gray-500">
            Preferred Email: {expectedFriend.email}
          </p>
        </div>
      </div>
      <div className="col-span-2 text-center bg-base-100 content-center rounded-md shadow-sm">
        <h2 className="text-2xl font-bold">
          {expectedFriend.days_since_contact}
        </h2>
        <p className="text-gray-600">Days Since Contact</p>
      </div>
      <div className="col-span-2 text-center bg-base-100 content-center rounded-md shadow-sm">
        <h2 className="text-2xl font-bold">{expectedFriend.goal}</h2>
        <p className="text-gray-600">Goal (Days)</p>
      </div>
      <div className="col-span-2 text-center bg-base-100 content-center rounded-md shadow-sm">
        <h2 className="text-2xl font-bold">{expectedFriend.next_due_date}</h2>
        <p className="text-gray-600">Next Due</p>
      </div>
      <div className="col-span-6 px-5 bg-base-100 rounded-md shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold mb-4">Relationship Goal</h2>
          <p className="text-gray-600">
            Contact Every <span className="font-bold">30 days</span>
          </p>
        </div>
        <div>
          <button className="btn">Edit</button>
        </div>
      </div>

      <div className="row-span-1 col-span-4 space-y-4">
        <button className="btn w-full">
          {" "}
          <RiNotificationSnoozeLine />
          Snooze 2 Weeks
        </button>
        <button className="btn w-full">
          {" "}
          <FiArchive />
          Archive
        </button>
        <button className="btn w-full text-red-500">
          {" "}
          <RiDeleteBin6Line />
          Delete
        </button>
      </div>
      <div className="col-span-6 px-5 bg-base-100 rounded-md shadow-sm">
        <h2 className="mb-3 text-xl font-bold mt-3">Quick Check-In</h2>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleCall()}
            className="btn flex flex-col w-full h-24 text-xl"
          >
            <div className="text-2xl">
              <FiPhoneCall />
            </div>
            Call
          </button>
          <button
            onClick={() => handleText()}
            className="btn flex flex-col w-full h-24 text-xl"
          >
            <div className="text-2xl">
              <MdOutlineTextsms />
            </div>
            Text
          </button>
          <button
            onClick={() => handleVideo()}
            className="btn flex flex-col w-full h-24 text-xl"
          >
            <div className="text-2xl">
              <LuVideo />
            </div>
            Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
