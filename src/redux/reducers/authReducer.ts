import { createSlice } from "@reduxjs/toolkit";

type TActionSetDialog = {

    isLoginOpen: boolean,
    isRegistrationOpen: boolean,
    isLoad: boolean,
}

type TUserData = {

    email: string,
    pass: string,
    name: string,
    mark: string,
    adres: string

}

export interface IAuth {

    isLoginOpen: boolean,
    isRegistrationOpen: boolean,
    isAuth: boolean,
    isLoad: boolean,
    userData: TUserData | null,

}

const initialState: IAuth = {

    isLoginOpen: false,
    isRegistrationOpen: false,
    isAuth: false,
    isLoad: false,
    userData: null,

}

const sliceAuth = "search";

const authSlice = createSlice({


    name: sliceAuth,
    initialState,
    reducers: {

        setDialog: (state, action) => {
            const isLoginOpen = action.payload.isLoginOpen;
            const isRegistrationOpen = action.payload.isRegistrationOpen;
            const isLoad = action.payload.isLoad;

            state.isLoginOpen = isLoginOpen;
            state.isRegistrationOpen = isRegistrationOpen;
            state.isLoad = isLoad;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.isAuth = true;
        },
        logout: (state, action) => {

            state.isLoginOpen = false;
            state.isRegistrationOpen = false;
            state.isAuth = false;
            state.isLoad = false;
            state.userData = null;
        }

    },
    extraReducers: (builder) => {

    }

})


export const {
    setDialog,
    setUserData,
    logout,

} = authSlice.actions;

export default authSlice;



