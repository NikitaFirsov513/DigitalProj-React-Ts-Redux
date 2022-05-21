import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../../redux/store/store";



export default function () {

    const product = useSelector((state: RootState) => state.product.product)


    return (

        <div className="product__brand">
            <p>{product?.brand}</p>
            <Link to={"/search/" + product?.brand}>Все товары {product?.brand}</Link>
        </div>)


}