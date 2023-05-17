import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import MovieChild from "./MovieChild";

const MoviesParent = () => {
  const [moivesList] = useState([
    { id: uuid(), name: "Fast 10", year: 2023 },
    { id: uuid(), name: "Fifty shades", year: 2016 },
    { id: uuid(), name: "Me Before You", year: 2016 },
    { id: uuid(), name: "Specter", year: 2021 },
  ]);
  return (
    <div>
      {moivesList.map((m) => (
        <MovieChild key={uuid()} {...m}></MovieChild>
      ))}
    </div>
  );
};
export default MoviesParent;
