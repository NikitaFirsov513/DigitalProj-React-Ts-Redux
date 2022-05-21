import React, { useEffect } from "react";
import './Search.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setDefault, setSearchProductList } from "../../redux/reducers/searchReducer";
import Filter from "../../components/Filter/Filter";
import BigProductList from "../../components/BigProductList/BigProductList";



export default function SearchPage() {

    let query = useParams().query;
    const dispatch = useDispatch();
    let productList = useSelector((state: RootState) => state.productList.productList)
    let productListAfterParams = useSelector((state: RootState) => state.search.productListAfterParams)

    useEffect(() => {
        dispatch(setSearchProductList({ productList: productList, query: query }));
        dispatch(setDefault("asd"))
    }, [productList])

    return (
        <div className="search">
            <div className="search__container">
                <div className="search__head">
                    <p>{'Поиск по запросу "' + query + '"'}</p>
                    <Filter />
                </div>

                <div className="search__content">
                    {productListAfterParams ? <BigProductList productList={productListAfterParams} /> : <></>}

                </div>
            </div>
        </div>
    )
}
