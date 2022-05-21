import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productDataTypeElement } from "../../../../../data/productData";
import { setProduct, setProductByElem } from "../../../../../redux/reducers/productReducer";
import { RootState } from "../../../../../redux/store/store";


export default function ProductInfoColorElement(props: { color: string, name: string }) {

    const productList = useSelector((state: RootState) => state.productList.productList);

    const product = useSelector((state: RootState) => state.product.product);
    //let element = props.element;

    const name = props.name;
    const color = props.color;

    const dispatch = useDispatch();

    function linkClick() {

        dispatch(setProduct({ name: name, productList: productList }));
    }


    return (

        <>

            {color == product?.colorHex ?
                <Link style={{ border: "4px solid #EFA500", backgroundColor: color }} to={'/product?name=' + color}></Link>
                :
                <Link onClick={e => linkClick()} style={{ border: "4px solid " + color, backgroundColor: color }} to={'/product?name=' + color}></Link>
            }

        </>
    )
}