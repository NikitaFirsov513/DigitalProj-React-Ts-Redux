import { productDataTypeElement } from "../../data/productData";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { delateFromCard } from "../../redux/reducers/basketReducer";


export default function BasketListElementDelate(props: { element: productDataTypeElement }) {

    const element = props.element;
    const dispatch = useDispatch();

    function delate() {
        dispatch(delateFromCard(element));
    }

    return (
        <div>
            <IconButton sx={{margin:"0 10px 0 0 "}} onClick={(e) => delate()}>
                <DeleteIcon sx={{ width: "35px", height: "35px", color: "#151A40", padding: "0" }} />
            </IconButton>
        </div>)
}