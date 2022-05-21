import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import './ViewMode.scss'
import { useDispatch } from 'react-redux';
import { toggleView } from '../../../../redux/reducers/searchReducer';


export default function ViewMaode() {

    const dispatch = useDispatch();

    function changeViewMode() {
        document.querySelector(".viewMode__back")?.classList.toggle("viewMode__back--two");
        dispatch(toggleView("any"));
    }



    return (

        <div onClick={e => changeViewMode()} className="viewMode">

            <div className='viewMode__mode'>
                <ViewModuleIcon sx={{ width: "30px", height: "30px", color: "#151A40" }} />
            </div>
            <div className='viewMode__mode'>
                <ViewListIcon sx={{ width: "30px", height: "30px", color: "#151A40" }} />
            </div>
            <div className='viewMode__back'>

            </div>
        </div>

    );
}