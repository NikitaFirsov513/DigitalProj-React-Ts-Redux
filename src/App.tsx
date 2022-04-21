import React from 'react';
import { Provider, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Product/ProductPage';
import SearchPage from './pages/Search/SearchPage';
import { setProductList } from './redux/actions/productListActions';

function App() {


  const dispatch = useDispatch();
  dispatch(setProductList());


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/search/:query' element={<SearchPage />} />

      </Routes>
    </>


  );
}

export default App;
