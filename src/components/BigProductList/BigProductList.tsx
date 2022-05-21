import { productDataType } from "../../data/productData";
import BigProductListElement from "./BigProductListElement";
import './BigProductList.scss'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import BigProductListElementList from "./BigProductListElementList";


export default function BigProductList(props: { productList: productDataType }) {

    let productList = props.productList;
    let viewMode = useSelector((state: RootState) => state.search.viewMode);


    return (<div className="productList">




        {viewMode === "ViewModuleIcon"
            ?
            <div className="productList-module">
                {productList.map(el => {
                    return (<BigProductListElement key={el.name} element={el} />)

                })}
            </div>
            :
            <div className="productList-list">
                {productList.map(el => {

                    return (<BigProductListElementList key={el.name} element={el} />)


                })}
            </div>}

    </div>)



}

/* */