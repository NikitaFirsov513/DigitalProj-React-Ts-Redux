
import { useSelector } from "react-redux"
import { RootState } from "../../../../../redux/store/store"
import Checkbox from '@mui/material/Checkbox';
import ColorFilterElement from "./ColorFilterElement";



export default function ColorFilterList() {

    let colorList = useSelector((state: RootState) => state.search.allParams).colorHex;


    //console.log(colorList)


    return (<>

        {Array.isArray(colorList) ? <>
            {colorList.map(e => {
                return (

                    <ColorFilterElement key={e} color={e} />

                )


            })}

        </>

            : <></>}




    </>)
}