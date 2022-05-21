import "./BasketTotalPrice.scss"
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { productDataType } from "../../data/productData";


export default function BasketTotalPrice(props: { basketList: productDataType }) {

    let basketList = props.basketList;

    let totalPrice = Array.isArray(basketList) ? basketList.reduce(function (sum, current) {
        return sum + current['sum'];
    }, 0) : false

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#151A40"),
        width: "100%",
        backgroundColor: "#151A40",
        '&:hover': {
            backgroundColor: "#EFA500",
        },
    }));

    return (
        <div className="basketTotalPrice">
            <div className="basketTotalPrice__container">
                <div className="basketTotalPrice__top">
                    <p>Цена</p>
                    <p>{totalPrice}</p>
                </div>
                <div className="basketTotalPrice__bot">

                    <ColorButton variant="contained">
                        <p className="basketTotalPrice__button">Заказать</p>
                    </ColorButton>

                </div>
            </div>
        </div>)

}