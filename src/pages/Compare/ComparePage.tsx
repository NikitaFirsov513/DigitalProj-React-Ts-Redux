import { useSelector } from "react-redux";
import Compare from "../../components/Compare/Compare";
import { RootState } from "../../redux/store/store";
import "./ComparePage.scss";




export default function ComparePage() {


    let totalKolCompare = useSelector((state: RootState) => state.compare.totalCol);



    return (
        <div className="comparePage">
            <div className="comparePage__container">

                {totalKolCompare !== 0 ? <><Compare /></> : <>Пусто</>}

            </div>
        </div>)
}