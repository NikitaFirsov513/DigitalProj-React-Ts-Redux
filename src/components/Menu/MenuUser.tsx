import { MouseEvent, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Button from '@mui/material/Button';
import { logout } from "../../redux/reducers/authReducer";
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
import './MenuUser.scss';

export default function MenuUser() {

    let userData = useSelector((state: RootState) => state.auth.userData);


    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {

        dispatch(logout("any"));

    };




    return (<>


        <Button onClick={handleClick} sx={{ color: "#ffffff" }} variant="text">{userData?.name !== null ? userData?.name : " "}</Button>

        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },

                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem className="menu-item" >
                <ListItemIcon >
                    <HistoryIcon fontSize="small" />
                </ListItemIcon>
                <Link to={"/order"} className="menu-item__text" >История заказов</Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={e => handleLogout()}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                <p>Logout</p>
            </MenuItem>
        </Menu>

    </>)

}