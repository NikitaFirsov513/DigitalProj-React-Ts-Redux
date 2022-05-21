import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";
import ProductInfoColorElement from "./ProductInfoColorElement";

export default function ProductInfoColor() {

    const product = useSelector((state: RootState) => state.product.product)
    const productList = useSelector((state: RootState) => state.productList).productList;
    const colorList = useSelector((state: RootState) => state.product.colorList);



    return (
        <div className="product__color">
            <p>Цвет</p>
            <div className="product__color-list">
                {Array.isArray(colorList) ?
                    <>
                        {colorList.map((element) => {

                            return (<ProductInfoColorElement color={element.color} name={element.name} key={element.color} />)

                        })}
                    </>
                    :
                    <></>}
            </div>
        </div>)
}