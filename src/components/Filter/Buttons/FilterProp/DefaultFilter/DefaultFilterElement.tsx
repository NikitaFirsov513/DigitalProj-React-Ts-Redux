
import { useDispatch } from 'react-redux';
import { addParams } from '../../../../../redux/reducers/searchReducer';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


type TDefautlFilterElementProps = {
    type: string,
    value: string
}

export default function DefaultFilterElement(props: TDefautlFilterElementProps) {

    const type = props.type;
    const value = props.value;

    const dispatch = useDispatch();

    function onChange() {

        dispatch(addParams({ "type": type, "value": value }))

    }

    return (<>

        <FormControlLabel control={<Checkbox onChange={e => onChange()} />} label={value} />

    </>)

}
