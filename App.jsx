import { useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to store the dog image

  // Function to fetch a random dog image from the Dog CEO API
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message); // Store the dog image URL in the state
    } catch (error) {
      console.error("Error fetching dog image:", error); // Handle any errors
    }
  };

  // Styles to center everything
  const containerStyle = {
    display: "flex",
    justifyContent: "center",  // Center horizontally
    alignItems: "center",      // Center vertically
    height: "100vh",           // Full viewport height
    flexDirection: "column",   // Arrange items in a column
    textAlign: "center",       // Center text
  };

  return (
    <div style={containerStyle}>
      <h1>Dog Image Fetcher</h1>

      {/* Button to fetch a dog image */}
      <button onClick={fetchDogImage}>Fetch Random Dog Image</button>

      {/* Display the fetched dog image */}
      {dogImage && (
        <div style={{ marginTop: "20px" }}>
          <h2>Random Dog Image</h2>
          <img src={dogImage} alt="Random Dog" style={{ width: "300px" }} />
        </div>
      )}
    </div>
  );
}

export default App;
