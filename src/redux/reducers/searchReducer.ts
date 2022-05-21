import { createSlice } from "@reduxjs/toolkit";
import { productData, productDataType, productDataTypeElement } from "../../data/productData";

type param = {
    type: string;
    value: string[];
}

type TParamsList = {
    minPrice: number,
    maxPrice: number,
    colorHex: string[],
    colorName: string[],
    category: string[],
    mainParams: param[],

    //[arg: string]: number | string[],

}
type TActiveParamsList = {
    minPrice: number,
    maxPrice: number,
    [arg: string]: number | string[],

}


export interface ISearchList {
    searchProductList: productDataType | null;
    paramsList: TActiveParamsList;
    allParams: TParamsList;
    productListAfterParams: productDataType | null;
    viewMode: "ViewModuleIcon" | "ViewListIcon";
}
const initialState: ISearchList = {
    searchProductList: null,
    viewMode: "ViewModuleIcon",
    paramsList: {
        minPrice: 0,
        maxPrice: 150000,
        colorHex: [],
        category: [],
        mainParams: []
    },

    allParams: {
        minPrice: 0,
        maxPrice: 150000,
        colorHex: [],
        category: [],
        colorName: [],
        mainParams: [],
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
                else {
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
                                if (elem.price >= paramsList['minPrice'] || paramsList['minPrice'] == 0) {
                                    colSimilarParams++;
                                }
                                continue;
                            case 'maxPrice':
                                if (elem.price <= paramsList['maxPrice']) {
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
                minPrice: 150000,
                maxPrice: 0,
                colorHex: [],
                category: [],
                colorName: [],
                mainParams: [],
            };

            if (productList == null)
                return;


            productList.forEach((element: productDataTypeElement) => {

                if (element.name.toLocaleLowerCase().includes(query.toLowerCase()) || element.category.toLocaleLowerCase().includes(query.toLowerCase())) {
                    searchProductList.push(element);
                }

            })

            searchProductList.forEach((element: productDataTypeElement) => {


                //elem['name'].toLocaleLowerCase().includes(element.toLowerCase())





                //добавление всех категорий

                //макс цена
                if (allParams.maxPrice < element.price) {
                    allParams.maxPrice = element.price;
                }

                //мин цена
                if (allParams.minPrice > element.price) {
                    allParams.minPrice = element.price;
                }
                //добавление цветов
                if ('colorHex' in allParams) {
                    //console.log("asd")
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



                if (!('colorName' in allParams)) {
                    allParams.colorName = [element.colorName];
                }
                if ('colorName' in allParams) {
                    //console.log("asd")
                    if (Array.isArray(allParams.colorName)) {
                        const isFindNameParams = allParams.colorName.find((e, i) => {
                            if (e === element.colorName)
                                return true;
                        })

                        if (isFindNameParams === undefined) {
                            allParams.colorName.push(element.colorName);
                        }
                    }
                }

                if (!('colorName' in allParams)) {
                    allParams.colorName = [element.colorName];
                }



                //Категории
                if ('category' in allParams) {
                    //console.log("asd")
                    if (Array.isArray(allParams.category)) {

                        const isFindNameParams = allParams.category.find((e, i) => {
                            if (e === element.category)
                                return true;
                        })

                        if (isFindNameParams === undefined) {
                            allParams.category.push(element.category);
                        }
                    }
                }


                if (!('category' in allParams)) {
                    allParams.category = [element.category];
                }



                element.prop.forEach((elem, index) => {

                    let indexParam: null | number = null;

                    const isFindNameParams = allParams.mainParams.find((e, i) => {

                        if (e.type == elem.type) {

                            indexParam = i;
                            return true;

                        }

                    })

                    if (isFindNameParams !== undefined && indexParam !== null) {
                        //                        const isFindValue = newParams['mainParams'][index]['value'].find((e, i) => e == element['value'])

                        const isFindValue = allParams.mainParams[indexParam].value.find((e, i) => e === elem.value);

                        if (!isFindValue)
                            allParams.mainParams[index].value.push(elem.value);

                    } else {

                        allParams.mainParams.push({ type: elem.type, value: [elem.value] });

                    }



                })
                /*
                                element.prop.forEach((elem, index: number | null) => {
                
                                    index = null;
                                    //if (typeof allParams['mainParams'] == "Array")
                
                
                                    if (Array.isArray(allParams['mainParams'])) {
                
                                        const isFindNameParams = allParams['mainParams'].find((e, i) => {
                                            if (e['type'] == elem['type']) {
                                                index = i;
                                                return true;
                                            }
                                        })
                
                
                                    }
                
                                })
                */







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
                colorHex: [],
                category: [],
                mainParams: [],
            };
            state.productListAfterParams = prod;
        },
        toggleView: (state, action) => {
            const viewMode = JSON.parse(JSON.stringify(state, undefined, 2)).viewMode;
            let newViewMode: string;

            if (viewMode == "ViewListIcon") {
                state.viewMode = "ViewModuleIcon";
            } else {
                state.viewMode = "ViewListIcon";
            }




        }

    },
    extraReducers: (builder) => {

    }
})


export const {
    addParams,
    setDefault,
    setSearchProductList,
    toggleView } = searchSlice.actions;

export default searchSlice;
