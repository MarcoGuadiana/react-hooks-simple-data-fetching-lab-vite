import {react} from 'react'

function DogDisplay({ dogImage }) {
  if (!dogImage) return <p>Loading dog...</p>;

  return (
    <img
      src={dogImage}
      alt="A Random Dog"
      className="rounded-2xl shadow-lg max-w-sm mb-4"
    />
  );
}


export default DogDisplay