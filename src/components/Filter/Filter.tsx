import { ButtonGroup } from '@mui/material'
import FilterProp from './Buttons/FilterProp/FilterProp'
import ViewMode from './Buttons/ViewMode/ViewMode'
import './Filter.scss'


export default function Filter() {




    return (
        <div className='filter'>
            <ViewMode />
            <span className='filter__border'  ></span>
            <FilterProp />
        </div>)
}