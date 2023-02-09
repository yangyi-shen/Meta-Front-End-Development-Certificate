import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DessertsList from './DessertsList'
import './App.css'

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>List of low calorie desserts:</h1>
      <DessertsList data={desserts}></DessertsList>
    </div>
  )
}

export default App
