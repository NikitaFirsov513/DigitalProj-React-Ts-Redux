import ProductInfoData from "./Data/ProductInfoData";
import ProductInfoImage from "./Image/ProductInfoImage";



export default function ProductInfoProp() {


    return (
        <div className="product__prop">

            <ProductInfoImage />
            <ProductInfoData />
        </div>
    )
}