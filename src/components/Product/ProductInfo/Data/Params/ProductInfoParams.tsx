import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";
import ProductInfoParamsElement from "./ProductInfoParamsElement";

export default function ProductInfoParams() {


    const product = useSelector((state: RootState) => state.product.product);

    return (
        <div className="product__params">
            {product?.prop.map((elem) => {
                return (<ProductInfoParamsElement key={elem.type+elem.value} type={elem.type} value={elem.value} />)

            })}

            <p>Все характристики</p>
        </div>)
}