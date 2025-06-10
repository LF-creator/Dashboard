import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../services/api';
import Card from '../components/Card';
import GenderSection from '../components/GenderSection';
import AgeGroupSection from '../components/AgeGroupSection';
import SkeletonCard from '../components/SkeletonCard';

import '../styles/Dashboard.css';

import {
  FaRegUser,
  FaRegClock,
  FaRedo,

} from 'react-icons/fa';

import {
  LuEye,
  LuRows2,
  LuUsers,
  LuCarFront

} from 'react-icons/lu';

const BasicLine = ({ color }) => (
    <hr className="divider-line"/>
);


const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard().then(setData).catch(console.error);
  }, []);

if (!data) {
  return (
    <div className="dashboard">
      {Array.from({ length: 8 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
      <div style={{ marginTop: '2rem' }}>
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

  return (
    <div className="dashboard-container">
  <div className="dashboard">
    {/* Metric Cards */}
    <h1 className="dashboard-title">Dashboard</h1>
    <BasicLine color="grey" />
    <section className="card-grid">
      <Card label="Unique Contacts" value={data.uniqueContacts} icon={FaRegUser} />
      <Card label="Frequency" value={data.frequency} icon={FaRedo} />
      <Card label="RAC" value={data.rac} icon={LuEye} />
      <Card label="Aggregated Audience" value={data.aggregatedAudience} icon={LuUsers} />
      <Card label="Observation Time(Avg.)" value={data.observationTimeAvg + 's'} icon={LuEye} />
      <Card label="Observation Time(Total)" value={data.observationTimeTotal} icon={FaRegClock} />
      <Card label="Vehicles" value={data.vehicles} icon={LuCarFront} />
      <Card label="SOV" value={data.sov + '%'} icon={LuRows2} />
    </section>

    {/* Stacked Sections */}
    <section className="data-sections">
      <AgeGroupSection ageGroups={data.ageGroups} />
      <GenderSection gender={data.gender} />
    </section>
  </div>
</div>
  );
};

export default Dashboard;