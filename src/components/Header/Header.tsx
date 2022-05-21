import React, { useRef } from "react";
import './Header.scss'
import { Link, Location, unstable_HistoryRouter, useLocation } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { setCategoryList } from "../../redux/actions/menuActions";
import { useSelector } from "react-redux";
import { menuDataTypeElement } from "../../data/menuData";
import { RootState } from "../../redux/store/store";
import { generatePath } from "react-router";
import { useNavigate } from 'react-router-dom';
import { setDialog } from "../../redux/reducers/authReducer";
import MenuUser from "../Menu/MenuUser";





export default function Header() {

    const dispatch = useDispatch();
    const search = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    let categoryList = useSelector((state: RootState) => state.menu.categoryList);
    let basketKol = useSelector((state: RootState) => state.basket.basketList).length;
    let totalKolCompare = useSelector((state: RootState) => state.compare.totalCol);
    let isAuth = useSelector((state: RootState) => state.auth.isAuth);
    let userData = useSelector((state: RootState) => state.auth.userData);


    dispatch(setCategoryList());


    function searchSubmit(e: React.FormEvent) {

        e.preventDefault();
        if (search !== null)
            navigate('/search/' + search.current?.value)

    }


    function toggleMenu() {
        document.querySelector('.header__toggle')?.classList.toggle('header__toggle--active')
    }

    function loginOpen() {

        dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: false }));

    }


    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <div className="header__logo">
                        <Link to={"/"}><h1>Цифротех</h1></Link>
                        <IconButton onClick={e => toggleMenu()} sx={{ color: "#ffffff" }} aria-label="menu" size="large">
                            <MenuIcon sx={{ width: "50px", height: "50px" }} />
                        </IconButton>
                    </div>
                    <div className="header__search">
                        <form onSubmit={e => searchSubmit(e)} action="">
                            <SearchIcon sx={{ color: "#ffffff" }} />
                            <input ref={search} type="text" />
                        </form>
                    </div>
                    <div className="header__inform">
                        <Link to={"/basket"}>
                            <Button sx={{ color: "#ffffff" }} variant="text">Корзина({basketKol})</Button>
                        </Link>
                        <Link to={"/compare"}>
                            <Button sx={{ color: "#ffffff" }} variant="text">Сравнение({totalKolCompare})</Button>
                        </Link>

                        {isAuth ?
                            <MenuUser />
                            :
                            <Button onClick={e => loginOpen()} sx={{ color: "#ffffff" }} variant="text">Вход</Button>
                        }


                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__menu">
                        {categoryList ? categoryList.map((element: menuDataTypeElement) => {
                            return (<Link key={element.URLName} to={"/search/" + element.URLName}>{element.name}</Link>)

                        }) : <></>}
                    </div>
                    <div className="header__toggle header__toggle--active"></div>
                </div>
            </div>
        </header>)
}
