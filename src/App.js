import './App.css';
import Header from './components/Header';
import AddName from './components/AddName';
import OutputData from './components/OutputData';
import { useState } from 'react';
import Names from "./components/Names";

function App() {
  const [names, SetNames] = useState([])
  const [isLoading, setIsLoading] = useState(false);




  const addNameHandler = (response) => {
    console.log(response);
    
      setIsLoading(true);

      const transformedNames = [];

      for (const key in response.data) {
        const names = {
          names: response.data[key].nameOfStud
        }
        transformedNames.push(names);
        console.log(names);
        SetNames(transformedNames);
      }

      setIsLoading(false);

  }
  let content = <p>No Names Found!!</p>;

  if (names.length > 0) {
    content = <Names names={names} />;
  }
 
  if (isLoading) {
    content = <p>Loading...!</p>;
  }

  return (
    <div className="App">
      <Header />
      <AddName />
      <div className='outputDiv'>
      <OutputData onAddNames={addNameHandler} />
      <section>{content}</section>
      </div>
    </div>
  );
}

export default App;
