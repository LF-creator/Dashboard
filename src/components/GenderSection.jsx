import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer,Label } from "recharts";
import "../styles/GenderSection.css";

const GenderSection = ({ gender }) => {
  const data = [
    { name: "Female", value: gender.female },
    { name: "Male", value: gender.male },
  ];

    const percentage = (
    (data[0].value / (data[0].value + data[1].value)) *
    100
  ).toFixed(0);
  const startAngle = 180; 
  const endAngle = 0; 
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  const firstSegmentValue = data[0].value;
  const firstSegmentPercentage = firstSegmentValue / totalValue;
  const firstSegmentEndAngle = startAngle - (startAngle - endAngle) * firstSegmentPercentage;
  const midpointAngle = firstSegmentEndAngle - (firstSegmentEndAngle - endAngle) / 2;

  const COLORS = ["#00d9c0", "#4cc6f3"];

  return (
    <div className="gender-box">
      <h3>Gender Distribution</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx={100}
            cy={100}
            startAngle={180}
            endAngle={0}
            paddingAngle={0}
            cornerRadius={6}
            innerRadius={75}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
          value={`${percentage}%`}
          position="center"
          style={{ fontSize: "30px", fontWeight: "700" }}
        />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderSection;