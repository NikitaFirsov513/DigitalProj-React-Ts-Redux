import ProductInfoBasket from "./ProductInfoBasket"
import ProductInfoProp from "./ProductInfoProp"


export default function ProductInfo() {

    return (
        <div className="product__info">
            <ProductInfoProp />
            <ProductInfoBasket />
        </div>)
}