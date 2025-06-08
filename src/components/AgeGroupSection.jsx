import Card from './Card';

const AgeGroupSection = ({ ageGroups }) => {
  const groups = ageGroups || {}; // fallback to empty object

  return (
    <section className="card-group">
      <h3>Age Groups</h3>
      {Object.entries(groups).map(([age, count]) => (
        <Card key={age} label={`Age ${age}`} value={count} />
      ))}
    </section>
  );
};

export default AgeGroupSection;