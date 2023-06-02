import './App.css';
import ListProduct from './Components/ListProduct';
import Header from './Components/Header';
import AddProduct from './Components/AddProduct';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header/>
          <Routes>
            
              <Route path="/" exact element={<ListProduct/>} />
            
          </Routes>
          <Routes>
            
              <Route path="/product" exact element={<ListProduct/>} />
            
          </Routes>
          <Routes>
        
              <Route path="/add" exact element={<AddProduct/>} />
        
          </Routes> 
             
           
      </Router>
    </div>
    
  );
}

export default App;
