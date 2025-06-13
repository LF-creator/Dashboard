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
  LuCarFront,
} from 'react-icons/lu';

const BasicLine = () => <hr className="divider-line" />;

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboard()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <BasicLine />

        <section className="card-grid">
          {isLoading
            ? skeletonCards.map((_, idx) => <SkeletonCard key={idx} />)
            : (
              <>
                <Card label="Unique Contacts" value={data.uniqueContacts} icon={FaRegUser} />
                <Card label="Frequency" value={data.frequency} icon={FaRedo} />
                <Card label="RAC" value={data.rac} icon={LuEye} />
                <Card label="Aggregated Audience" value={data.aggregatedAudience} icon={LuUsers} />
                <Card
                  label="Observation Time(Avg.)"
                  value={`${data.observationTimeAvg}s`}
                  icon={LuEye}
                  change="+8,2%"
                />
                <Card label="Observation Time(Total)" value={data.observationTimeTotal} icon={FaRegClock} />
                <Card label="Vehicles" value={data.vehicles} icon={LuCarFront} />
                <Card label="SOV" value={`${data.sov}%`} icon={LuRows2} />
              </>
            )}
        </section>

        <section className="data-sections">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <AgeGroupSection ageGroups={data.ageGroups} />
              <GenderSection gender={data.gender} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;