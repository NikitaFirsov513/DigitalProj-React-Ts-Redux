import React, { FC, useRef } from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { productDataTypeElement } from "../../data/productData";

export default function BigProductSliderItem(props: { element: productDataTypeElement }) {

    const element = props.element;

    return (

        <div className="big-slider__element">
            <div className="big-slider__element-top">
                <img src={element['urlName'][0]} alt="" />
                <p>{element['name']}</p>
            </div>
            <div className="big-slider__element-bottom">
                <p>12000p</p>
                <IconButton>
                    <ShoppingCartOutlinedIcon sx={{ width: "30px", height: "30px", color: "#151A40" }} />
                </IconButton>
            </div>
        </div>

    );
}