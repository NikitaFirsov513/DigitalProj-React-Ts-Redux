import React, { FC, useEffect, useState } from "react";
import './Search.scss'
import Accordion from '@mui/material/Accordion';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { addParams, setDefault, setSearchProductList } from "../../redux/reducers/searchReducer";

function valuetext(value: number) {
    return `${value}ssa`;
}


export default function SearchPage() {

    const [value, setValue] = React.useState<number[]>([20, 37]);
    let query = useParams().query;
    const dispatch = useDispatch();




    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(newValue);
    };


    let productList = useSelector((state: RootState) => state.product.productList)

    useEffect(() => {
        dispatch(setSearchProductList({ productList: productList, query: query }));
        dispatch(setDefault("asd"))
        dispatch(addParams({ "type": "Оперативная память", "value": "8" }));
        //dispatch(addSlider({ query: ["Смартфон Xiaomi", "Смартфон Realme"], productList: productList }));
    }, [productList])







    return (
        <div className="search">
            <p>{query}</p>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    )
}
