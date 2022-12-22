import './App.css';
import image from './shopping.jpeg'
import imagetwo from './man.jpeg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
			<div className="container">
      <img src={ image } width="200px" alt="shopping" className="image"/>
			</div>
      <div className="container">
				<h1>Grocery list</h1>
			</div>
      <GroceryList/>
			<div className="container">
      	<img src={ imagetwo } width="200px" alt="shopping man" className="image"/>
			</div>
    </div>
  );
}

export default App;
