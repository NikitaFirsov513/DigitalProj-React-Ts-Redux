
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { addParams } from '../../../../../redux/reducers/searchReducer';


export default function ColorFilterElement(props: { color: string }) {

    let color = props.color;
    let borderColor = props.color;
    const dispatch = useDispatch();

    function onChange() {

        dispatch(addParams({ "type": "colorHex", "value": color }))

    }

    

    return (<>
        <Checkbox
            onChange={e => onChange()}
            sx={{
                color: { color },
                '&.Mui-checked': {
                    color: color,
                },
            }}
        />
    </>)
}