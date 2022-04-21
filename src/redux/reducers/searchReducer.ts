import { createSlice } from "@reduxjs/toolkit";
import { productData, productDataType, productDataTypeElement } from "../../data/productData";

type TParamsList = {
    minPrice: number,
    maxPrice: number,
    [arg: string]: number | string[],
}

export interface ISearchList {
    searchProductList: productDataType | null;
    paramsList: TParamsList;
    allParams: TParamsList;
    productListAfterParams: productDataType | null;
}
const initialState: ISearchList = {
    searchProductList: null,

    paramsList: {
        minPrice: 0,
        maxPrice: 150000,
    },

    allParams: {
        minPrice: 0,
        maxPrice: 150000,
    },

    productListAfterParams: null,

}
const sliceSearch = "search";


const searchSlice = createSlice({
    name: sliceSearch,
    initialState,
    reducers: {
        /*------*/


        addParams: (state, action) => {
            const newParams = action.payload;
            let paramsList = JSON.parse(JSON.stringify(state, undefined, 2)).paramsList;
            let searchProductList = JSON.parse(JSON.stringify(state, undefined, 2)).searchProductList;
            let productListAfterParams: productDataType = [];
            if (newParams['type'] in paramsList) {
                //ключ уже есть 
                if (newParams['type'] === "minPrice" || newParams['type'] === "maxPrice") {
                    //если цена
                    paramsList[newParams['type']] = newParams['value'];
                }
                if (newParams['type'] !== "minPrice" || newParams['type'] !== "maxPrice") {
                    //если не цена
                    let index = paramsList[newParams['type']].indexOf(newParams['value']);
                    if (index !== -1) {
                        paramsList[newParams['type']].splice(index, 1);
                    }
                    else {
                        paramsList[newParams['type']].push(newParams['value']);
                    }
                }
            }
            else {
                //ключа нет
                paramsList[newParams['type']] = [newParams['value']]
            }





            //Сортировка 

            const colParams = Object.keys(paramsList).length;

            if (searchProductList == null)
                return;

            searchProductList.forEach((elem: productDataTypeElement) => {
                let colSimilarParams = 0;


                for (let key in paramsList) {

                    if (key == 'minPrice' || key == 'maxPrice') {

                        switch (key) {
                            case 'minPrice':
                                if (elem.price > paramsList['minPrice'] || paramsList['minPrice'] == 0) {
                                    colSimilarParams++;
                                }
                                continue;
                            case 'maxPrice':
                                if (elem.price < paramsList['maxPrice']) {
                                    colSimilarParams++;
                                }
                                continue;
                        }
                    }
                    if (paramsList[key].length == 0) {
                        colSimilarParams++;
                        continue;
                    }
                    //if(typeof key === 'string')
                    if (elem[key]) {
                        let isFindValue = paramsList[key].indexOf(elem[key]);
                        if (isFindValue !== -1) {
                            colSimilarParams++;
                            continue;
                        }
                    }
                    elem.prop.map((el) => {
                        if (key == el['type']) {
                            let isFindProp = paramsList[key].indexOf(el['value'])
                            if (isFindProp !== -1) {
                                colSimilarParams++;
                            }
                        }
                    })
                }
                if (colSimilarParams >= colParams) {
                    productListAfterParams.push(elem)
                }
            })



            //Создать новый класс.


            state.productListAfterParams = productListAfterParams;
            state.paramsList = paramsList;

        },

        setSearchProductList: (state, action) => {

            //добавление товаров, который соответствует поиску
            const query = action.payload.query;
            const productList = action.payload.productList;
            let searchProductList: productDataType = [];
            let allParams: TParamsList = {
                minPrice: 0,
                maxPrice: 150000,
            };

            if (productList == null)
                return;

            productList.forEach((element: productDataTypeElement) => {


                //elem['name'].toLocaleLowerCase().includes(element.toLowerCase())

                if (element.name.toLocaleLowerCase().includes(query.toLowerCase())) {
                    searchProductList.push(element);
                }




                //добавление всех категорий

                //let isFindColor = allParams
                if ('colorHex' in allParams) {

                    //                
                    console.log("asd")

                    if (Array.isArray(allParams.colorHex)) {
                        const isFindNameParams = allParams.colorHex.find((e, i) => {
                            if (e === element.colorHex)
                                return true;

                        })

                        if (isFindNameParams === undefined) {

                            allParams.colorHex.push(element.colorHex);

                        }


                    }
                }

                if (!('colorHex' in allParams)) {
                    //console.log("asd")

                    allParams.colorHex = [element.colorHex];

                }



            })









            state.allParams = allParams;
            state.searchProductList = searchProductList;
            state.productListAfterParams = searchProductList;

        },

        setDefault: (state, action) => {
            const prod = JSON.parse(JSON.stringify(state, undefined, 2)).searchProductList;
            state.paramsList = {
                minPrice: 0,
                maxPrice: 150000,
            };
            state.productListAfterParams = prod;
        }



    },
    extraReducers: (builder) => {

    }
})


export const {
    addParams,
    setDefault,
    setSearchProductList } = searchSlice.actions;

export default searchSlice;
