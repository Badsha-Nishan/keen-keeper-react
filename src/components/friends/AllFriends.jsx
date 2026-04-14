import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import FriendsCards from './FriendsCards';

const AllFriends = () => {
    const friends = useLoaderData()
    return (
        <div className='w-11/12 mx-auto mt-6'>
            <h3 className='text-3xl font-bold'>Your Friends</h3>
            {
                friends.map(friend => <FriendsCards key={friend.id} friend={friend} />)
            }
        </div>
    );
};

export default AllFriends;