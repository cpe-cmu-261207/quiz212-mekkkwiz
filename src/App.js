import React, { createContext, useState } from "react";
import tableCard from "./components/tableCard";

export const personsContext = createContext({});

function App() {
  const [ID, setID] = useState(620610807);
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{ID}</p>
        <button onClick={() => setID(ID - 1)}>-</button>
        <button onClick={() => setID(620610807)}>reset </button>
        <button onClick={() => setID(ID + 1)}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
