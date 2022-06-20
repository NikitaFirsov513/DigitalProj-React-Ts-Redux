import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store"


export default function ProductInfoImage() {

    const productImage = useSelector((state: RootState) => state.product.product)?.urlName[0]


    return (
        <div className="product__images" >
            <img src={productImage} alt="" />
        </div>)
}