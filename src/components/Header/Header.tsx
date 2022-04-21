import React, { FC, useRef } from "react";
import './Header.scss'
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { setCategoryList } from "../../redux/actions/menuActions";
import { useSelector } from "react-redux";
import { menuDataType, menuDataTypeElement } from "../../data/menuData";
import { RootState } from "../../redux/store/store";

export default function Header() {

    const dispatch = useDispatch();
    dispatch(setCategoryList())

    let categoryList = useSelector((state: RootState) => state.menu.categoryList)

    function toggleMenu() {
        document.querySelector('.header__toggle')?.classList.toggle('header__toggle--active')
    }


    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <div className="header__logo">
                        <h1>Цифротех</h1>
                        <IconButton onClick={e => toggleMenu()} sx={{ color: "#ffffff" }} aria-label="menu" size="large">
                            <MenuIcon sx={{ width: "50px", height: "50px" }} />
                        </IconButton>
                    </div>
                    <div className="header__search">
                        <form action="">
                            <SearchIcon sx={{ color: "#ffffff" }} />
                            <input type="text" />
                        </form>
                    </div>
                    <div className="header__inform">
                        <Button sx={{ color: "#ffffff" }} variant="text">Корзина(0)</Button>
                        <Button sx={{ color: "#ffffff" }} variant="text">Сравнение(0)</Button>
                        <Button sx={{ color: "#ffffff" }} variant="text">Вход</Button>
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
/*

 <IconButton sx={{ color: "#ffffff" }} aria-label="menu" size="large">
                            <MenuIcon sx={{ width: "50px", height: "50px" }} />
                        </IconButton>
*/