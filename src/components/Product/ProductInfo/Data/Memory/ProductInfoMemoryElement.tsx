import { useDispatch, useSelector } from "react-redux";
import { Link, useLinkClickHandler } from "react-router-dom";
import { productDataTypeElement } from "../../../../../data/productData";
import { RootState } from "../../../../../redux/store/store";
import { setProduct } from "../../../../../redux/reducers/productReducer"


export default function ProductInfoMemoryElement(props: { memory: string, name: string }) {

    const product = useSelector((state: RootState) => state.product.product);
    //let element = props.element;
    const dispatch = useDispatch();
    const productList = useSelector((state: RootState) => state.productList.productList);

    const name = props.name;
    const memory = props.memory;

    function linkClick() {
        dispatch(setProduct({ name: name, productList: productList }));
    }


    return (
        <>
            {memory == product?.memory ?
                <Link style={{ backgroundColor: "#EFA500" }} to={'/product?name=' + name}>{memory}</Link>
                :
                <Link onClick={e => linkClick()} to={'/product?name=' + name}>{memory}</Link>}
        </>
    )

}