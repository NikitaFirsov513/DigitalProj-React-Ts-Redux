

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import DefaultFilterList from './DefaultFilterList';


export type TDefautlFilterProps = {
    type: string,
    name: string,
    data: string[]
}

export default function DefaultFilter(props: TDefautlFilterProps) {

    const type = props.type;
    const data = props.data;
    const name = props.name;




    return (
        <div className="defaultFilter">
            <Accordion disableGutters={true} defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <p>{name}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                        {<DefaultFilterList name={name} type={type} data={data} />}
                    </Box>

                </AccordionDetails>
            </Accordion>

        </div>
    )
}