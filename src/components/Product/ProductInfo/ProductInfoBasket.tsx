import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { addToCard, delateFromCard } from "../../../redux/reducers/basketReducer";


export default function ProductInfoBasket() {

    const product = useSelector((state: RootState) => state.product.product);
    const [inGrosery, setInGrosary] = useState(false)
    const dispatch = useDispatch();
    const basketList = useSelector((state: RootState) => state.basket.basketList);

    function basketClick() {

        if (!inGrosery) {
            setInGrosary(!inGrosery);
            dispatch(addToCard(product));
        }
        else {
            setInGrosary(!inGrosery);
            dispatch(delateFromCard(product));
        }

    }

    useEffect(() => {

        setInGrosary(basketList.some((elem) => elem.name === product?.name))

    }, [])
    useEffect(() => {

        setInGrosary(basketList.some((elem) => elem.name === product?.name))

    }, [product])




    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#151A40"),
        width: "365px",
        backgroundColor: "#151A40",
        '&:hover': {
            backgroundColor: "#272C55",
            boxShadow: "none"
        },
        boxShadow: "none"

    }));

    const ButtonInCard = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#151A40"),
        width: "365px",
        backgroundColor: "#EFA500",
        '&:hover': {
            backgroundColor: "#EDB946",
            boxShadow: "none"
        },
        boxShadow: "none"

    }));

    return (
        <div className="product__basket">
            <div className="product__basket-price">
                <p>Стоимость</p>
                <p>{product?.price} р</p>
            </div>
            {inGrosery ?
                <ButtonInCard onClick={e => basketClick()} variant="contained">
                    В корзину
                </ButtonInCard>
                :
                <ColorButton onClick={e => basketClick()} variant="contained">
                    В корзину
                </ColorButton>}

        </div>
    )
}