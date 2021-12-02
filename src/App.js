import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Message from './components/Message';
import Products from './products/Products';

const listOfItems = ["One","Two","Three","Four","Five"];
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h2>Learn React</h2>
    <Products items = {listOfItems}/>
    <h3>Follow and subscribe @Munsa1</h3>
    </header>
    </div>
  )
  // return (
  //   <div className="App">
  //      <Hello name="Munsa"/>
  //      <Hello name="Mibenge"/>
  //      <Hello name="Muchena"/>
  //      <Hello name="Chalwe"/>
           
  //      <Message/>

  //     <Counter/>
  //   </div>
  // );
}

export default App;
