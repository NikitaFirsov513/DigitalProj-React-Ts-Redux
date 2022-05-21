import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from "react";
import { addParams } from "../../redux/reducers/searchReducer";


function valuetext(value: number) {
    return `${value}р`;
}

export function CategoryList() {

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

    //setValue([categoryList.minPrice, categoryList.maxPrice]);

    return (

        <div className="category">

            <Accordion    disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <p>Accordion 1</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Slider
                            step={100}
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
            <Accordion  disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <p>Accordion 1</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Slider
                            step={100}
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
        </div>)
}