import Product from "./item/Product"
import style from "./cart.module.css"
import axios from "axios";


const Cart =(props)=>{ 

    const onAddOverlay =(obj)=>{
        axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, obj]);
    }

    const onClickSearch = (inputValue) =>{
        props.setSearch(inputValue.target.value);
    }

    const onAddFav =(obj)=>{
        axios.post('https://637f91dd5b1cc8d6f949a67e.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, obj]);
    }

    return(
        <div className={style.cart_section}>
            <div className={style.search}>
            <h1>Туры:</h1>
                <div className={style.search_block}>
                    <img src="/img/search.png" alt="поиск"></img>
                    <input onChange={onClickSearch} placeholder="Поиск"></input>
                </div>
            </div>

        <div className={style.cart}>
            {

            props.item.filter((item)=>item.title.toLowerCase().includes(props.search.toLowerCase()))
            .map(obj => {
                return(
                    <Product key={obj.id}
                         title={obj.title} 
                         price={obj.price}
                          img={obj.img}
                        //   const onClickPlus ={ () =>{
                        //     alert('выводит: '+ obj.title)
                        //         }
                        //   }

                          favBtn={(favObj)=>{

                            onAddFav(favObj)
                          }


                          }
                        
                        onPlus={(cartObj)=>{
                            console.log(cartObj)
                            onAddOverlay(cartObj)
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

export default Cart