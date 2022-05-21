import { Link } from "react-router-dom";
import { productDataTypeElement } from "../../data/productData";
import ToCartButton from '../Buttons/ToCartButton';

export default function BigProductListElement(props: { element: productDataTypeElement }) {

    const element = props.element;




    return (

        <div className="productList__element">
            <div className="productList__element-top">
                <img src={element['urlName'][0]} alt="" />
                <Link to={'/product?name=' + element.name} >{element['name']}</Link>
            </div>
            <div className="productList__element-bottom">
                <p>{element.price} p</p>
                <ToCartButton element={element} />
            </div>
        </div>

    );
}