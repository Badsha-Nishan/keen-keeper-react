import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendContext";

const StatsPage = () => {
    const {timeline} = useContext(FriendsContext);
    
    const counts = {
        call: 0,
        text: 0,
        video: 0,
    }
    timeline.forEach(item =>{
        if(counts[item.type] !== undefined){
            counts[item.type]++
        }
    })

    const data = [
        { name: 'Call', value: counts.call, fill: '#0088FE' },
        { name: 'Text', value: counts.text, fill: '#00C49F' },
        { name: 'Video', value: counts.video, fill: '#FFBB28' },
      ];
    
    return (
        <div className="bg-base-100 w-11/12 mx-auto my-8 py-5 rounded-md shadow">
      <h2 className="text-5xl font-semibold py-5 pl-5">Friendship Analytics</h2>
      <p className="text-2xl pl-5">By Interaction Type</p>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: "auto",
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default StatsPage;
