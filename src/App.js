
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



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
