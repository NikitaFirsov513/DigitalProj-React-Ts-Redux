import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigProductSlider from "../../components/BigProductSlider/BigProductSlider";
import { RootState } from "../../redux/store/store";
import './HomePage.scss'
import { addSlider } from "../../redux/reducers/sliderList";

export default function HomePage() {

    let productList = useSelector((state: RootState) => state.productList.productList)

    const dispatch = useDispatch();
    let sliderData = useSelector((state: RootState) => state.slider.sliderList);
    let sliderXiaomi = sliderData === null ? null : sliderData['Смартфон Xiaomi']
    let sliderRealme = sliderData === null ? null : sliderData['Смартфон Realme']

    useEffect(() => {
        dispatch(addSlider({ query: ["Смартфон Xiaomi", "Смартфон Realme"], productList: productList }));
    }, [productList])



    return (
        <div className="home">
            <BigProductSlider productList={sliderXiaomi} query={"Смартфон Xiaomi"} name={"Смартфоны Xiaomi"} id={"SmartXiaomi"} />
            <BigProductSlider productList={sliderRealme} query={"Смартфон Xiaomi"} name={"Смартфоны Realme"} id={"SmartRealme"} />

        </div>)

}



