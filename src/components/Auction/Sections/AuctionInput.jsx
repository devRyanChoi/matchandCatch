import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm(props) {
  const [name, setName] = useState("");
  return (
    <form>
      <label>Bid:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}