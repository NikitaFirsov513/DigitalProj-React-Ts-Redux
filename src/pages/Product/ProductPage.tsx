import './ProductPage.scss';
import getQueryFromUrl from "../../utils/getQueryFromUrl";
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/reducers/productReducer';
import Product from "../../components/Product/Product"
export default function ProductPage() {

    //let name = getQueryFromUrl()['name'];
    const productList = useSelector((state: RootState) => state.productList.productList);
    const product = useSelector((state: RootState) => state.product.product)

    const [name, setName] = useState(getQueryFromUrl()['name'])
    const dispatch = useDispatch();

    useEffect(() => {

        //установка reduserProduct
        dispatch(setProduct({ name: name, productList: productList }));

    }, [name, productList])
    useEffect(() => {

        //установка reduserProduct
        dispatch(setProduct({ name: name, productList: productList }));

    }, [])


    return (
        <div className="productPage">
            <div className="productPage__container">
                {product !== null ? <Product /> : <>Нет Такого</>}
            </div>
        </div>)
}

