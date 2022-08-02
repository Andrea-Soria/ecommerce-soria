import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';


    
    function App() {
      return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>  
                      <Route index path='/' element={<ItemListContainer/>} />
                      <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    
                      <Route path = '/detalle/:productId' element = {<ItemDetailContainer />} />

                      <Route path = '/cart' element = {<CartContainer/>} />

                      <Route path='*' element={<Navigate to='/' />} /> 

                </Routes>

            </div>
          </BrowserRouter>

        
      );
    }
    

export default App;
