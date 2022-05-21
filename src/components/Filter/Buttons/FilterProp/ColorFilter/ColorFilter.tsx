import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addParams } from "../../../../../redux/reducers/searchReducer";
import { RootState } from "../../../../../redux/store/store";
//import "./PriceFilter.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ColorFilterList from "./ColorFilterList";



export default function ColorFilter() {





    return (
        <div className="color">
            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <p>Цвета</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                        <ColorFilterList />
                    </Box>

                </AccordionDetails>
            </Accordion>
        </div>)
}