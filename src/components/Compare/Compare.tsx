import "./Compare.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import CompareContent from "./CompareContent/CompareContent";


export default function Compare() {

    let compareList = useSelector((state: RootState) => state.compare.totalCol);



    return (
        <section className="compare">
            <div className="compare__container">
                <div className="compare__title">
                    <p>Сравнение товаров</p>
                </div>
                <CompareContent />
            </div>

        </section>
    )
}