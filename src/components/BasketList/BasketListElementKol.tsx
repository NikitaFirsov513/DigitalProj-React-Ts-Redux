import { productDataTypeElement } from "../../data/productData";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addOne, difOne } from "../../redux/reducers/basketReducer";


export default function (props: { element: productDataTypeElement }) {

    const element = props.element;
    const dispatch = useDispatch();
    function add() {

        dispatch(addOne(element));

    }
    function dif() {

        dispatch(difOne(element));

    }


    return (

        <div className="basketList__kol">

            <Button onClick={(e) => dif()} sx={{ fontSize: "25px", color: "#1d1d1d" }} className="basketList__button">
                -
            </Button>

            <p>
                {element['kol']}
            </p>

            <Button onClick={(e) => add()} sx={{ fontSize: "25px", color: "#1d1d1d" }} className="basketList__button">
                +
            </Button>

        </div>

    )

}