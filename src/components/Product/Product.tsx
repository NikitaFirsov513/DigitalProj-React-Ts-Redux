import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import ProductCompare from './Buttons/ProductCompare';
import ProductFavorite from './Buttons/ProductFavorite';
import './Product.scss';
import ProductInfo from './ProductInfo/ProductInfo';



export default function Product() {


    const product = useSelector((state: RootState) => state.product.product)




    return (
        <div className='product'>
            <div className='product__name'>
                <p>{product?.name}</p>
            </div>
            <div className='product__buttons'>
                <ProductFavorite />
                <ProductCompare />
            </div>
            <ProductInfo />
        </div>)
}