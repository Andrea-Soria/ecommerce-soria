
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


const onAdd = (count) => {
      alert('Compra total:' + count)
    }
    
    function App() {
      return (
        <div className="App">
          <NavBar/>
          <ItemListContainer/>
          <ItemCount initial={1} stock={11} onAdd={onAdd}/>
        </div>
      );
    }
    

export default App;
