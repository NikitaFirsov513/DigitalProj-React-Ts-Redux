import { productDataTypeElement } from "../../data/productData";
import BasketListElementDelate from "./BasketListElementDelate";
import BasketListElementKol from "./BasketListElementKol";


export default function BasketListElement(props: { element: productDataTypeElement }) {

    const element = props.element;
    //console.log(element)
    return (
        <div className="basketList__element">
            <div className="basketList__left">
                <img src={element.urlName[0]} alt="" />
                <p>{element.name}</p>
            </div>
            <div className="basketList__right">
                <BasketListElementKol element={element} />
                <p>{element['sum']} p</p>
                <BasketListElementDelate element={element} />
            </div>

        </div>)
}