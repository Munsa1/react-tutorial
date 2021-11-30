import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Hello name="Munsa"/>
      <Hello name="Mibenge"/>
      <Hello name="Muchena"/>
      <Hello name="Chalwe"/>

      <Message/>
    </div>
  );
}

export default App;
