import React from 'react';
import Banner from '../../components/banner/Banner';
import Stats from './Stats';
import AllFriends from '../../components/friends/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Stats />
            <AllFriends />
        </div>
    );
};

export default Homepage;