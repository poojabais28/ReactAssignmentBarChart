import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

function Graph() {
  const { count } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const n = parseInt(count, 10);
    if (isNaN(n) || n <= 0) {
      navigate("/");
      return;
    }
    const randomValues = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 100) + 10
    );
    setValues(randomValues);
  }, [count, navigate]);

  return (
    <div className="container">
      <h1>Interactive Bar Chart</h1>

      <BarChart values={values} activeIndex={activeIndex} />

      <div className="button-group">
        {values.map((val, i) => (
          <button
            key={i}
            className={activeIndex === i ? "active" : ""}
            onClick={() => setActiveIndex(i)}
          >
            Bar {i + 1}
          </button>
        ))}
      </div>
      {/* Display selected text/value below buttons */}
      {activeIndex !== null && (
        <p className="selected-text">Selected Bar: {activeIndex + 1}</p>
      )}
    </div>
  );
}

export default Graph;
