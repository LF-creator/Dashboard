import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../styles/GenderSection.css";

const GenderSection = ({ gender }) => {
  const data = [
    { name: "Female", value: gender.female },
    { name: "Male", value: gender.male },
  ];

  const total = data[0].value + data[1].value;
  const femalePercentage = ((data[0].value / total) * 100).toFixed(0);
  const malePercentage = ((data[1].value / total) * 100).toFixed(0);

    const COLORS = ["#00d9c0", "#4cc6f3"];

  return (
    <div className="gender-box">
      <h3>Gender Distribution</h3>
            <div className="gender-content">
        <div className="gender-stats">
          <div className="gender-row">
            <span className="gender-label female">Female</span>
            <span className="gender-value">{gender.female.toLocaleString()}</span>
          </div>
          <div className="gender-row">
            <span className="gender-label male">Male</span>
            <span className="gender-value">{gender.male.toLocaleString()}</span>
          </div>
        </div>
        <div className="gender-chart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="40%"
                startAngle={180}
                endAngle={0}
                paddingAngle={8}
                cornerRadius={6}
                innerRadius={75}
                outerRadius={80}
                fill="#8884d8"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ filter: `drop-shadow(0 10px 10px ${COLORS[index % COLORS.length]})` }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="gender-percentages">
        <span className="gender-percent female">{femalePercentage}%</span>
        <span className="gender-percent male">{malePercentage}%</span>
      </div>
    </div>
  );
};

export default GenderSection;