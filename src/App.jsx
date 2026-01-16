import { useState } from "react";
import { Navbar } from './components/Navbar.jsx'
import { NewsBoard } from './components/NewsBoard.jsx'

export const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}


export default App
