import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';

export default function ProductFavorite() {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#151A40"),
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#ffffff",
            boxShadow: "none"
        },
        boxShadow: "none",

    }));
    return (
        <>
            <ColorButton variant="contained">
                <FavoriteBorderIcon className="product__button-icon" /> <p className="product__button-text">В избранное</p>
            </ColorButton>
        </>)
}