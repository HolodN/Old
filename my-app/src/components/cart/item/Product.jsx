import style from './product.module.css';
import React from 'react';


const Product =(props)=>{


    const[added, setAdded] = React.useState(false);
    
    const onClickAdd =()=>{

        setAdded(!added);
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.onPlus({title, description,price, img});
        // console.log(added);

    }

    return(
        <div className={style.cart_item}>
            <button className={style.fav_btn} onClick={props.favBtn}>Добавить в избранное</button>
        <img className={style.cart_img} src={props.img}></img>
        <p className={style.cart_title}>{props.title} </p>
        <p className={style.cart_description}>Сочи Из Москва - 7 Ночей 
        <br/>05.12.22 - 2 взрослых</p>
        <p className={style.price}>Цена:</p>
        <div className={style.cart_price}>
            <span>{props.price}</span>
            <button className={ added ? style.add_cart:  style.add_true} 
            onClick={onClickAdd} > { added ?  <img width={15}
            src={ added ? '/img/icon.png':'' }
            alt=""/>:'Оставить заявку' }
            </button>
        </div>
    </div>
    )
}
export default Product