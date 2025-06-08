import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const Charts = ({ gender, ageGroups }) => {
  const genderData = [
    { name: 'Female', value: gender?.female || 0 },
    { name: 'Male', value: gender?.male || 0 }
  ];

  const ageData = Object.entries(ageGroups || {}).map(([age, count]) => ({
    age,
    count
  }));

  return (
    <div style={{ width: '100%', marginTop: '24px' }}>
      {/* Gender Pie Chart */}
      <div style={{ width: '100%', height: 300 }}>
        <h3>Gender Distribution</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={genderData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({ name }) => name}
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Age Bar Chart */}
      <div style={{ width: '100%', height: 300, marginTop: '40px' }}>
        <h3>Age Group Distribution</h3>
        <ResponsiveContainer>
          <BarChart data={ageData}>
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;