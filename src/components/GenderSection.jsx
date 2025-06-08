import Card from './Card';

const GenderSection = ({ gender }) => {
  return (
    <section className="card-group">
      <h3>Gender Distribution</h3>
      <Card label="Female" value={gender?.female ?? 'N/A'} />
      <Card label="Male" value={gender?.male ?? 'N/A'} />
    </section>
  );
};

export default GenderSection;