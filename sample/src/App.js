// App.js
import './App.css';
import React, { useState } from 'react'
import TreeChart from "./TreeChart"

const initialData = {
  name: "A1",
  children: [
    {
      name: "Bsdfgh1",
      children: [
        {
          name: "B2fghvbj",
          children: [{ name: "Bfcghbj5" }]
        },
        {
          name: "B3fghvjn"
        },
        {
          name: "B4fgjkf gfdgds gfd fh"
        }
      ]
    },
    {
      name: "C1dgdfgfd ",
      children: [
        {
          name: "C2ddghdfgfd ",
        },
        {
          name: "Cawrgdbf3",
          children: [
            { name: "cgdgjbnm x4" },
            {
              name: "cxdggh.,m5",
              children: [{ name: "cghg6", children: [{ name: "c7", children: [{ name: "c8" }] }] }]
            }
          ]
        },
      ]
    },
    {
      name: "D1",
      children: [
        {
          name: "D2",
        },
      ]
    },
    {
      name: "E1"
    }
  ]
}

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState(initialData);

  return (
    <React.Fragment>
      <h1>Animated Tree Chart</h1>
      <div >
        <TreeChart data={data} />
      </div>
    </React.Fragment>
  );
}

export default App;
