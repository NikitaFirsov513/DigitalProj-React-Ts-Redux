import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";
import ProductInfoMemoryElement from "./ProductInfoMemoryElement";

export default function ProductInfoMemory() {

    const product = useSelector((state: RootState) => state.product.product)
    const productList = useSelector((state: RootState) => state.productList).productList;
    const memoryList = useSelector((state: RootState) => state.product.memoryList);


    return (
        <div className="product__memory">
            <p>Объем памяти</p>
            <div className="product__memory-list">
                {Array.isArray(memoryList) ?
                    <>
                        {memoryList.map((element) => {

                            return (<ProductInfoMemoryElement key={element.memory} name={element.name} memory={element.memory} />)

                        })}
                    </>
                    :
                    <></>}
            </div>

        </div>
    )
}