import { useLoaderData } from "react-router";
import FriendsCards from "./FriendsCards";

const AllFriends = () => {
  const friends = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mt-6">
      <h3 className="text-3xl font-bold">Your Friends</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center mt-4">
        {friends.map((friend) => (
          <FriendsCards key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
