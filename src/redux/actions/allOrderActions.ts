import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAllOrderElement } from "../../components/OrderTable/OrderTableRow";
//import { allOrder } from "../../data/allOrder";
import { menuData } from "../../data/menuData";

const AllOrderActions = {
    SET_ALL_ORDER: "allOrder/setAllOrder",
}

type dataType = {

    dataCreate: string,
    dataDelivery: string,
    status: number,
    totalSumma: number,

    tovarList: string,
    priceList: string,
    kolList: string,
    summaList: string,

};
export const setAllOrder = createAsyncThunk(
    AllOrderActions.SET_ALL_ORDER,

    async function (name: string) {

        let req = await fetch(`http://localhost/digital/hs/оrders/all`,
            {
                method: 'POST',
                body:
                    JSON.stringify({

                        "name": name
                    })
            });
        let data: dataType[] = await req.json();
        
        return data;
    })

//console.log(newArray);
//return newArray;


        //await setTimeout(() => { }, 3000)
        //return Promise.resolve(allOrder);
/*let req = await fetch(`http://localhost:80/digital/hs/category/all`, { method: 'GET', });
req = await req.json();
return req;*/
        // await setTimeout(()=>{return true},5000)