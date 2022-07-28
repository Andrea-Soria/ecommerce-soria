
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


const onAdd = (count) => {
      alert('Compra total:' + count)
    }
    
    function App() {
      return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>  
                      <Route index path='/' element={<ItemListContainer/>} />
                      <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    
                      <Route path = '/detalle/:productId' element = {<ItemDetailContainer />} />

                      <Route path='*' element={<Navigate to='/' />} /> 
                </Routes>

                <ItemCount initial={1} stock={11} onAdd={onAdd}/>  
            </div>
          </BrowserRouter>

        
      );
    }
    

export default App;
