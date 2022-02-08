import React from "react";
import selectedFavorite from '../../assets/selectedFavorite.png'
import favorite from '../../assets/favorite.png'
import {FavoriteIconStyles} from "./favorites-icon.styles";

const FavoriteIcon = ({selected, onClick}) => {
    return selected
        ?  <FavoriteIconStyles onClick={onClick} src={selectedFavorite} alt='favorites icon' />
        : <FavoriteIconStyles onClick={onClick} src={favorite} alt='favorites icon' />

}

export default FavoriteIcon