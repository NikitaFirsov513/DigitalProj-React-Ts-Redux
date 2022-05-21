import { Link } from "react-router-dom";
import { productDataTypeElement } from "../../data/productData";
import ToCartButton from "../Buttons/ToCartButton";


export default function BigProductSliderItem(props: { element: productDataTypeElement }) {

    const element = props.element;


    return (

        <div className="big-slider__element">
            <div className="big-slider__element-top">
                <img src={element['urlName'][0]} alt="" />
                <Link to={'/product?name=' + element.name} >{element['name']}</Link>
            </div>
            <div className="big-slider__element-bottom">
                <p>{element.price} р</p>

                <ToCartButton element={element} />


            </div>
        </div>

    );
}