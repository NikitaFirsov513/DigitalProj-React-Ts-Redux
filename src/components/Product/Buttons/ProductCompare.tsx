import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import BalanceIcon from '@mui/icons-material/Balance';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { toggleToCompareList } from "../../../redux/reducers/compareReducer";
import { useEffect, useState } from "react";


export default function ProductCompare() {

    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.product.product);
    const compareList = useSelector((state: RootState) => state.compare.compareList);
    const [inCompare, setInCompare] = useState(false);


    useEffect(() => {

        //console.log(compareList)

        let elementInCompare = compareList.some((elem) => elem.productList.some((e) => e.name === product?.name))

        setInCompare(elementInCompare);


    }, [])
    useEffect(() => {

        //console.log(compareList)

        let elementInCompare = compareList.some((elem) => elem.productList.some((e) => e.name === product?.name))

        setInCompare(elementInCompare);


    }, [product])

    const CompareButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#151A40"),
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#ffffff",
            boxShadow: "none"
        },
        boxShadow: "none",

    }));



    function CompareClick() {

        dispatch(toggleToCompareList(product));
        setInCompare(!inCompare);

    }


    return (
        <>

            {
                inCompare ?
                    <CompareButton variant="contained" onClick={e => CompareClick()}>
                        <BalanceIcon className="product__button-icon product__button-icon-a" /> <p className="product__button-text product__button-text-a">В сравнении</p>
                    </CompareButton>
                    :
                    <CompareButton variant="contained" onClick={e => CompareClick()}>
                        <BalanceIcon className="product__button-icon" /> <p className="product__button-text">Сравнить</p>
                    </CompareButton>
            }
        </>)
}