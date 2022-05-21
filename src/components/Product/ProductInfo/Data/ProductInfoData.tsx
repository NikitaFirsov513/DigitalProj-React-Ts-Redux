import ProductInfoBrand from "./Brand/ProductInfoBrand";
import ProductInfoColor from "./Color/ProductInfoColor";
import ProductInfoMemory from "./Memory/ProductInfoMemory";
import ProductInfoParams from "./Params/ProductInfoParams";


export default function ProductInfoData() {


    return (
        <div className="product__data">
            <ProductInfoMemory />
            <ProductInfoColor />
            <ProductInfoParams />
            <ProductInfoBrand />
        </div>
    )
}