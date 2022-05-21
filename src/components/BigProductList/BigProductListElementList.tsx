import { Link } from "react-router-dom";
import { productDataTypeElement } from "../../data/productData";
import ToCartButton from '../Buttons/ToCartButton';

export default function BigProductListElementList(props: { element: productDataTypeElement }) {

    const element = props.element;

    return (
        <div className="productList__elementList">
            <div className="productList__elementList-container">
                <div className="productList__elementList-image">
                    <img src={element.urlName[0]} alt="" />
                </div>
                <div className="productList__elementList-info">
                    <div className="productList__elementList-name">
                    <Link to={'/product?name=' + element.name} >{element['name']}</Link>
                    </div>
                    <div className="productList__elementList-params">
                        <div className="productList__elementList-prop">
                            {
                                Array.isArray(element.prop) ?
                                    element.prop.map((el) => {
                                        return (
                                            <div key={el['type'] + el['value']} className="productList__elementList-prop-element">
                                                <p>{el['type']}</p>
                                                <p>{el['value']}</p>
                                            </div>
                                        )
                                    })
                                    : <></>
                            }
                        </div>
                        <div className="productList__elementList-price">
                            <p>{element.price} p</p>
                            <ToCartButton element={element} />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}