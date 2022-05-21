import { productDataType } from "../../data/productData"
import "./BasketList.scss"
import BasketListElement from "./BasketListElement";


export default function BasketList(props: { basketList: productDataType }) {

    let basketList = props.basketList;
    

    return (
        <div className="basketList">
            <div className="basketList__container">
                <div className="basketList__lable">
                    <p>Корзина</p>
                </div>
                <div className="basketList__list">
                    {Array.isArray(basketList)
                        ? <>{basketList.map((element) => {
                            return (<BasketListElement key={element.name} element={element} />)

                        })}</>
                        : <></>}
                </div>
            </div>
        </div>)

}