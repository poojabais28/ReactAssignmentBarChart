import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI imports
import { TextField, Button, Box } from "@mui/material";

function Home() {
  const [count, setCount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    const n = parseInt(count, 10);
    if (isNaN(n) || n <= 0) {
      setError("Please enter a positive integer");
      return;
    }
    navigate(`/graph/${n}`);
  };

  return (
    <div className="container">
      <h1> Configuration Page</h1>
      <div className="input-container">
        <TextField
          type="number"
          placeholder="Enter number of graph bars"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="button-container">
        <Button variant="contained" onClick={handleNavigate}>
          View Graph
        </Button>
      </div>
    </div>
  );
}

export default Home;
