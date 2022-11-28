import Product from "./item/Product"
import style from "./cart.module.css"


const Cart =(props)=>{ 

    const onAddOverlay =(obj)=>{
        props.setOverlayItems([...props.overlayItems], obj);
    }

    return(
        <div className={style.cart_section}>
            <div className={style.search}>
            <h1>Туры:</h1>
                <div className={style.search_block}>
                    <img src="/img/search.png" alt="поиск"></img>
                    <input placeholder="Поиск"></input>
                </div>
            </div>

        <div className={style.cart}>
            {

            props.item.map(obj => {
                return(
                    <Product key={obj.id}
                         title={obj.title} 
                         price={obj.price}
                          img={obj.img}
                        //   const onClickPlus ={ () =>{
                        //     alert('выводит: '+ obj.title)
                        //         }
                        //   }

                          favBtn={()=>{

                            alert('избранное: ' + obj.title);
                          }


                          }
                        
                        onPlus={(cartObj)=>{
                            console.log(cartObj)
                            onAddOverlay.call(cartObj)
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