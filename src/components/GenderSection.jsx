import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../styles/GenderSection.css";

const GenderSection = ({ gender }) => {
  const data = [
    { name: "Female", value: gender.female },
    { name: "Male", value: gender.male },
  ];

  const total = gender.female + gender.male;
  const femalePercentage = ((gender.female / total) * 100).toFixed(0);
  const malePercentage = ((gender.male / total) * 100).toFixed(0);

  const COLORS = ["#00d9c0", "#4cc6f3"];

  return (
    <div className="gender-box">
      <h3 className="genderHeader">CONTACTS BY GENDER</h3>
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
          <ResponsiveContainer width={"100%"} height={320}>
          
  <PieChart>
    {/* GLOW LAYERS (behind) */}
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="59%"
      startAngle={180}
      endAngle={0}
      paddingAngle={6}
      innerRadius={134}
      outerRadius={159} 
      stroke="none"
    >
      {data.map((_, index) => (
        <Cell
          key={`glow-${index}`}
          fill={COLORS[index]}
          className="glow-arc"
        />
      ))}
    </Pie>

    {/* ACTUAL CHART */}
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="60%"
      startAngle={180}
      endAngle={0}
      paddingAngle={6}
      cornerRadius={6}
      innerRadius={160}
      outerRadius={165}
      stroke="none"
    >
      {data.map((_, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index]}
        />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>

          <div className="gender-center-display">
            <div className="left-percent">
              <span className="big-percent">{femalePercentage}</span>
              <div className="center-label">Female</div>
            </div>

            <div className="center-percent">
              <span className="big-percent">%</span>
            </div>

            <div className="right-percent">
              <span className="big-percent">{malePercentage}</span>
              <div className="center-label">Male</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSection;