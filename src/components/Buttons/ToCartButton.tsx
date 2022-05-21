import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataTypeElement } from "../../data/productData";
import { addToCard, delateFromCard } from "../../redux/reducers/basketReducer";
import { RootState } from "../../redux/store/store";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function ToCartButton(props: { element: productDataTypeElement }) {


    const element = props.element;
    const [inGrosery, setInGrosary] = useState(false)
    const dispatch = useDispatch();
    const basketList = useSelector((state: RootState) => state.basket.basketList);

    function basketClick() {

        if (!inGrosery) {
            setInGrosary(!inGrosery);
            dispatch(addToCard(element));
        }
        else {
            setInGrosary(!inGrosery);
            dispatch(delateFromCard(element));
        }

    }

    useEffect(() => {

        setInGrosary(basketList.some((elem) => elem.name === element.name))

    }, [])
    return (
        <>{
            inGrosery ?
                <IconButton onClick={() => { basketClick() }}>
                    <ShoppingCartIcon sx={{ width: "30px", height: "30px", color: "#EFA500" }} />
                </IconButton>
                :
                <IconButton onClick={() => { basketClick() }}>
                    <ShoppingCartOutlinedIcon sx={{ width: "30px", height: "30px", color: "#151A40" }} />
                </IconButton>
        }</>

    )


}