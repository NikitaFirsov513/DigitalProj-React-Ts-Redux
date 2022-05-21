import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addParams } from "../../../../../redux/reducers/searchReducer";
import { RootState } from "../../../../../redux/store/store";
import "./PriceFilter.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';



function valuetext(value: number) {
    return `${value}р`;
}

export default function PriceFilter() {

    const dispatch = useDispatch();
    let categoryList = useSelector((state: RootState) => state.search.allParams);
    let prise = [categoryList.minPrice, categoryList.maxPrice];

    const handleChange = (event: Event, newValue: number | number[]) => {

        if (!Array.isArray(newValue)) {
            return
        }

        setValue(newValue as number[]);

        if (prise[0] !== newValue[0]) {
            prise[0] = newValue[0];
            dispatch(addParams({ "type": "minPrice", "value": prise[0] }))
        }

        if (prise[1] !== newValue[1]) {
            prise[1] = newValue[1];
            dispatch(addParams({ "type": "maxPrice", "value": prise[1] }))
        }
    };
    const [value, setValue] = useState<number[]>([categoryList.minPrice, categoryList.maxPrice]);


    return (
        <div className="price">

            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <p>Цена</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Slider
                            sx={{ width: "80%" }}
                            step={500}
                            min={categoryList.minPrice}
                            max={categoryList.maxPrice}
                            getAriaLabel={valuetext}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(x) => x + "р"}
                            getAriaValueText={valuetext}
                        />
                    </Box>

                </AccordionDetails>
            </Accordion>

        </div>
    )
}