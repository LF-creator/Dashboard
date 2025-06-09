import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../styles/GenderSection.css";

const GenderSection = ({ gender }) => {
  const data = [
    { name: "Female", value: gender.female },
    { name: "Male", value: gender.male },
  ];

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
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderSection;