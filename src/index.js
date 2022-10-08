// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);

const [honda, tesla] = cars;

console.log(honda);

const { model, coloursByPopularity, speedStats } = honda;

console.log(speedStats);

const { topSpeed: hondaTopSpeed } = speedStats;

console.log(coloursByPopularity);

const [hondaTopColour, hondaTopColour2] = coloursByPopularity;

console.log(hondaTopColour);

console.log(tesla);

const { coloursByPopularity: teslaTopColour, speedStats: topSpeed } = tesla;

console.log(topSpeed);

const { topSpeed: teslaTopSpeed } = topSpeed;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
