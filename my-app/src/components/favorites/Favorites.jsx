import React from 'react';
import axios from 'axios';
import style from './favorites.module.css'
import FavoritesItem from "./item/FavoritesItem"



const Favorites =(props)=>{
    const onAddOverlay =(obj)=>{
        axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, obj]);
    }


    const onDeleteFav =(id)=>{
        console.log(id);
        axios.delete(`https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites/${id}`)
        //Проверка на предмет наличия/отстутствия необходимого id если его нет то убирает из избранного элемент
        props.setFavorites((fav) => fav.filter(item => item.id !==id));
    }


    return(
        <div className={style.cart_section}>
            <div className={style.search}>
            <h1>Избранные туры:</h1>
                
            </div>

        <div className={style.cart}>
            {

            props.favorites.map(obj =>{
                return(
                    <FavoritesItem
                        key={obj.id}
                        id={obj.id}
                        title={obj.title} 
                        price={obj.price}
                        img={obj.img}

                        onDeleteFav={
                            (id) => {
                            onDeleteFav(id)
                            }
                        }

                        onPlus={
                            (cartObj)=>{
                            onAddOverlay(cartObj)
                        }
                        }
                    />
                )
            })
        }          
        </div>
    </div>
    )
}

export default Favorites