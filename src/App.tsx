import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Product/ProductPage';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<HomePage />}  />
      <Route path='/product' element={<ProductPage />}  />

    </Routes>

  );
}

export default App;
