import React from "react";
import { Link } from "react-router";

const FriendsCards = ({ friend }) => {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="bg-base-100 rounded-2xl p-5 shadow-md 
    transition-all duration-300 ease-in-out
    hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="space-y-4 cursor-pointer ">
        <div className="flex justify-center items-center ">
          <img
            className="rounded-full"
            src={friend.picture}
            alt={friend.name}
          />
        </div>
        <h3 className="text-2xl font-bold">{friend.name}</h3>
        <p>{friend.days_since_contact}d ago</p>
        <div className="flex gap-4 justify-center items-center">
          {friend.tags.map((tag, idx) => (
            <p className="bg-[#CBFADB] rounded-full px-3" key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <p
          className={`rounded-full w-fit px-3 mx-auto text-white ${
            friend.status == "almost due"
              ? "bg-[#EFAD44]"
              : friend.status == "overdue"
              ? "bg-[#EF4444]"
              : "bg-[#244D3F]"
          }`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendsCards;
