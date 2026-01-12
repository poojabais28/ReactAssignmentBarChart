function BarChart({ values, activeIndex }) {
  return (
    <div className="bar-chart">
      {values.map((val, i) => (
        <div
          key={i}
          className={`bar ${activeIndex === i ? "highlight" : ""}`}
          style={{ height: `${val}%` }}
          title={`Value: ${val}`}
        />
      ))}
    </div>
  );
}

export default BarChart;
