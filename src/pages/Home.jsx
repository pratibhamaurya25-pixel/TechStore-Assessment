import {useState, useEffect} from "react";
import "../styles/home.css"

function Home() {
   const [title, setTitle] = useState("");


  return (
    <div>
       <input
       className = "input-field"
       type="text"
       value={title}
       placeholder="Enter Product Title"
       onChange = {(e)=> setTitle(e.target.value)}
       />

    </div>
  )
}

export default Home