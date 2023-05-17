const MovieChild = ({ name, year }) => {
  return (
    <div>
      <h1
        style={{
          color: "red",
        }}
      >
        Movies Info
      </h1>
      <div style={{ backgroundColor: "beige", color: "red" }}>
        <h3>{name}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieChild;
