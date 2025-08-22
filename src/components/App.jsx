// create your App component here
import {useEffect, useState} from 'react'; 
import DogDisplay from './Dogdisplay.jsx';
import UpdateButton from './updateButton.jsx'; 

 function App() {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Random Dog Viewer 🐶</h1>

      <DogDisplay dogImage={dogImage} />
      <UpdateButton onUpdate={fetchDog} />
      
    </div>
  );
}

export default App