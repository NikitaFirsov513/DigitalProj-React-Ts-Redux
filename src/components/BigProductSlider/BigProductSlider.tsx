import React, { FC, useRef } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './BigProductSlider.scss'
import BigSlider from "../../utils/BigSlider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import BigProductSliderItem from "./BigProductSliderItem";
import { productDataType } from "../../data/productData";



export default function BigProductSlider(props: { query:string, name: string, id: string, productList: productDataType | null }) {

    const name = props.name;
    const id = props.id;
    const slider = new BigSlider(id, "bigSlider", 294);
    const dispatch = useDispatch();
    let productList = props.productList;//useSelector((state: RootState) => state.product.productList)
    


    return (

        <div className="big-slider">

            <div className="big-slider__name">
                <p>
                    {name}
                </p>
            </div>
            <div className="big-slider__content">
                <div className="big-slider__left">
                    <IconButton onClick={e => { slider.slideLeft() }}>
                        <ArrowBackIcon sx={{ width: "50px", height: "50px", color: "#151A40", }} />
                    </IconButton>
                </div>
                <div id="bigSlider" className="big-slider__slider">
                    <div id={id} className="big-slider__flex-line">
                        {productList ? productList.map((elem) => {
                            return (<BigProductSliderItem key={elem['name']} element={elem} />)
                        }) : <></>}
                    </div>
                </div>
                <div className="big-slider__right">
                    <IconButton onClick={e => slider.slideRight()} >
                        <ArrowForwardIcon sx={{ width: "50px", height: "50px", color: "#151A40" }} />
                    </IconButton>
                </div>

            </div>

        </div>
    )
}