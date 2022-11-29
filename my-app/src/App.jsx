import './App.css';
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Cart from './components/cart/Cart.jsx';
import Footer from './components/footer/Footer.jsx';
import Overlay from './components/overlay/Overlay';
import React from 'react';
import axios from 'axios';

function App(){

    // состояние корзины
    const [overlayOpen, setOverlayOpen] = React.useState(false);

    // хранение данных туров
    const [tyrs, setTyrs] = React.useState([]);

    // для хранения объектов корзины
    const[overlayItems, setOverlayItems] = React.useState([])
    
    // useEffect используется когда надо вывести что то только вначале или когда обновляется.Две квадратные скобки в конце для ограничения в один запрос.

    //Для поиска
    const[search, setSearch] = React.useState('')

    React.useEffect(() =>{
        // fetch('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs').then((resJson)=>{return resJson.json()})

    // вывод в консоль
    // .then((myJson)=>{console.log(myJson)})
    
    // .then((myJson)=>{setTyrs(myJson)});

    axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/tyrs').then((resJson) =>{
        setTyrs(resJson.data)
    })
    
    
    axios.get('https://637f91dd5b1cc8d6f949a67e.mockapi.io/cart').then((res) =>{
        setOverlayItems(res.data);
    })

    }, [])

    return(
        <div className="app">
             {overlayOpen ? <Overlay overlayProp={overlayItems} closeOverlay={() => setOverlayOpen(false)} />
                : null}

            <Header openOverlay={() => setOverlayOpen(true)} />
            <Banner/>

            <div className="text_section">
                <h2>
                ТУРЫ ОТ LIVE-TYR
                </h2>
                <p>
                Сотрудничество более чем с 20 международными и национальными компаниями, работающими на отправку и прием туристов, позволяет нам качественно предоставлять услуги туристам из России, Болгарии, Румынии, Украины, Латвии, Литвы, Белоруссии, Эстонии, Молдавии и Казахстана. 
                </p>
                <p>
                Международный туристический оператор является одной из международных компаний, организующих туры для туристов из России, стран бывшего СССР и Восточной Европы. TEZ TOUR основан в 1994 году.
                </p>
            </div>

            <Cart item={tyrs} overlayItems={overlayItems} setOverlayItems={setOverlayItems} setSearch={setSearch} search={search}/>
            <Footer/>


        </div>
    )
}
export default App