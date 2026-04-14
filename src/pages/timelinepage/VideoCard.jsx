import React from 'react';

const VideoCard = ({item}) => {
    return (
        <div className="space-y-4 ">
        <div className="flex items-center gap-3 bg-base-100 rounded-md p-4 shadow">
          <div>
            <img src={item.logo} alt="Video" />
          </div>
          <div>
            <p>
              <span className="font-bold">Video</span> with {item.name}
            </p>
            <p>{item.time}</p>
          </div>
        </div>
      </div>
    );
};

export default VideoCard;