// SeedData.js
import seedFirestore  from './seed'; // Update the path

function SeedData() {
  const handleSeedData = async () => {
    await seedFirestore();
  };

  return (
    <div>
      <h1>Seed Data</h1>
      <button onClick={handleSeedData}>Seed Firestore</button>
    </div>
  );
}

export default SeedData;