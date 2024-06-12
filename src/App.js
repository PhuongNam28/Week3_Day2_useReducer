import Content from "./Component/Content"
import React, {useContext} from 'react'
import { ThemeContext } from "./Context/ThemeContext";
import './App.css';
//You use Context when ever you want to pass a props from parent components to children components without passing through intermediary.
function App() {
  const context = useContext(ThemeContext)
  return (  
        <div className="App">
          <button onClick={context.toggleClick}>Toggle Me</button>
          <Content></Content>
        </div>
  );
}

export default App;
