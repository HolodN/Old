import style from './favoritesItem.module.css';
import React from 'react';


const Product =(props)=>{


    const[added, setAdded] = React.useState(false);
    const[fav, setFav] = React.useState(false);

    const onClickFav =()=>{
        setFav(!fav);
        let id = props.id 
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.favBtn({title, description, price, img,id});
    }
    
    const onClickAdd =()=>{

        setAdded(!added);
        let id = props.id
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.onPlus({title, description,price, img});
        // console.log(added);

    }

    const onDelete =()=>{
        props.onDeleteFav()
    }

    return(
        <div className={style.cart_item}>

            <button className={style.fav_btn_add} onClick={onDelete}>X</button>
            
            

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