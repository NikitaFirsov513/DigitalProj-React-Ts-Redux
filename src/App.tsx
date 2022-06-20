import { Provider, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from './components/Header/Header';
import Basket from './pages/Basket/Basket';
import ComparePage from './pages/Compare/ComparePage';
import HomePage from './pages/Home/HomePage';
import OrderPage from "./pages/Order/OrderPage";
import ProductPage from './pages/Product/ProductPage';
import SearchPage from './pages/Search/SearchPage';
import { setAllOrder } from "./redux/actions/allOrderActions";
import { setProductList } from './redux/actions/productListActions';

function App() {


  const dispatch = useDispatch();
  dispatch(setProductList());


  return (
    <>
      <Header />
      <Auth />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/search/:query' element={<SearchPage />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/compare' element={<ComparePage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </>


  );
}

export default App;
