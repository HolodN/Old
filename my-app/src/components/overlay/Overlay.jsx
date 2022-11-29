import ProductItem from "./item/ProductItem";
import style from "./overlay.module.css";


const Overlay = (props)=>{
    return(

        <div className={style.overlay}>
            <div className={style.product}>

                <div className={style.title_block}>
                    <h2>Заявки</h2>
                    <button className={style.close_btn} onClick={props.closeOverlay}>X</button>                      
                </div>

                {
                    props.overlayProp.length >0?

                <div className={style.product_list}>   
                    {

                        props.overlayProp.map(obj => {
                            return(
                                <ProductItem 
                                key={obj.id}
                                id={obj.id} 
                                title={obj.title} 
                                price={obj.price} 
                                img={obj.img} 
                                deleteItems={props.deleteItems}
                                />
                            )
                    })
                    }
                                    
                </div>

                    :<h2>Заявок нет</h2>

                }

                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_summ}>36 000</p>
                    <button>Оставить заявку</button>
                </div>

            </div>               
        </div>
    )
}
export default Overlay;