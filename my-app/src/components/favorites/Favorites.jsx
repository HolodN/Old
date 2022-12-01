import React from 'react';
import FavoritesItem from "./item/FavoritesItem"
import axios from 'axios';
import style from './favorites.module.css'


const Favorites =(props)=>{
    // const onAddOverlay =(obj)=>{
    //     axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart', obj)
    //     props.setOverlayItems([...props.overlayItems, obj]);
    // }


    const onAddFav =(obj)=>{
        axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, obj]);
    }

    const onDeleteFav =(obj)=>{
        // axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites', obj)
        // props.setFavorites([...props.favorites, obj]);
    }


    return(
        <div className={style.cart_section}>
            <div className={style.search}>
            <h1>Избранные туры:</h1>
                
            </div>

        <div className={style.cart}>
            {

            props.favorites.map(obj => {
                return(
                    <FavoritesItem
                     key={obj.id}
                         title={obj.title} 
                         price={obj.price}
                          img={obj.img}
                        //   const onClickPlus ={ () =>{
                        //     alert('выводит: '+ obj.title)
                        //         }
                        //   }

                          favBtn={()=>{

                           
                          }


                          }
                        
                        onDeleteFav={(cartObj)=>{
                            console.log(cartObj)
                            // onAddOverlay(cartObj)
                        }
                            
                            //onAddOverlay
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